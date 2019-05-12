import * as React from "react"
import { MdSearch } from "react-icons/md"
import { IoMdRefresh } from "react-icons/io"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { DEFAULT_ICON_SIZE } from "../../util/values"
import { MoviesActions } from "../../reducers/movies"

interface ITopMoviesProps {
    getTopMovies: () => void
    topMovies: TopMovie[]
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
                        <div
                            key={ `top-movie-${index}` }
                        >
                            <div>Title: { movie.title }</div>
                            <div>Overview: { movie.overview }</div>
                            <div>Release date: { movie.releaseDate }</div>
                            <div>Average rating: { movie.voteAverage }</div>
                            <div>Total ratings: { movie.voteCount }</div>
                            <br/>
                            <br/>
                        </div>
                    ) :
                    <span>There are no movies to list.</span>
                }
            </div>
        )
    }

    render() {
        const { isLoadingTopMovies, didLoadingTopMoviesFail, getTopMovies } = this.props

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
                            onClick={ () => getTopMovies() }
                        />
                    </div>
                </div>
                <br/>
                <br/>
                <div className="movie-list-section-container">
                    {
                        isLoadingTopMovies &&
                        <IoMdRefresh size={ DEFAULT_ICON_SIZE } />
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
