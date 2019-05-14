import * as React from "react"
import { MdSearch } from "react-icons/md"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { BounceLoader } from "react-spinners"

import { DEFAULT_ICON_SIZE, BLUE_FOR_BTNS_AND_LINKS } from "../../util/values"
import { MoviesActions } from "../../reducers/movies"
import MovieCard from "./MovieCard"

interface ITopMoviesProps {
    getTopMovies: () => void
    topMovies: Movie[]
    isLoadingTopMovies: boolean
    didLoadingTopMoviesFail: boolean
}

class TopMovies extends React.Component<ITopMoviesProps> {
    componentDidMount() {
        this.props.getTopMovies()
    }

    renderListOfTopMovies(): React.ReactNode {
        const movies = this.props.topMovies

        return (
            <div className="top-movies-list-container">
                {
                    movies.length ?
                    movies.map((movie, index) =>
                        <MovieCard
                            key={ `top-movie-${index}` }
                            movie={ movie }
                        />
                    ) :
                    <span>There are no movies to list.</span>
                }
            </div>
        )
    }

    render() {
        const { isLoadingTopMovies, didLoadingTopMoviesFail } = this.props

        return (
            <div className="top-movies-container">
                <div className="header-and-search-container">
                    <div className="header-container">
                        <h2>Top rated movies</h2>
                    </div>
                    <div className="search-btn-container">
                        <MdSearch
                            size={ DEFAULT_ICON_SIZE }
                            className="search-btn"
                        />
                    </div>
                </div>
                <div className="movie-list-section-container">
                    {
                        isLoadingTopMovies &&
                        <div className="loading-animation-container">
                            <div className="bounce-loader-container">
                                <BounceLoader
                                    color={ BLUE_FOR_BTNS_AND_LINKS }
                                    sizeUnit={ "px" }
                                    size={ 80 }
                                />
                            </div>
                        </div>
                    }
                    {
                        !isLoadingTopMovies && didLoadingTopMoviesFail &&
                        <div>Error. Failed to load top movies.</div>
                    }
                    {
                        !isLoadingTopMovies && !didLoadingTopMoviesFail &&
                        this.renderListOfTopMovies()
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: RootState) => {
    const { topMovies, isLoading, didLoadingFail } = state.movies.topMoviesData

    return {
        topMovies,
        isLoadingTopMovies: isLoading,
        didLoadingTopMoviesFail: didLoadingFail
    }
}

const actionCreators = dispatch => {
    const { getTopMovies } = MoviesActions
    const neededActions = { getTopMovies }

    return bindActionCreators(neededActions, dispatch)
}

export default connect(mapStateToProps, actionCreators)(TopMovies)
