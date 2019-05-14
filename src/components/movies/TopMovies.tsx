import * as React from "react"
import { MdSearch } from "react-icons/md"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { BounceLoader } from "react-spinners"
import * as InfiniteScroller from "react-infinite-scroller"

import { DEFAULT_ICON_SIZE, BLUE_FOR_BTNS_AND_LINKS } from "../../util/values"
import { MoviesActions } from "../../reducers/movies"
import MovieCard from "./MovieCard"

interface ITopMoviesProps {
    getTopMovies: (pageNumber?: number) => void
    isLoadingTopMovies: boolean
    didLoadingTopMoviesFail: boolean
    topMovies: Movie[]
    pageSize: number
    currentPage: number
    totalPages: number
    totalResults: number
}

class TopMovies extends React.Component<ITopMoviesProps> {
    componentDidMount() {
        this.props.getTopMovies()
    }

    renderListOfTopMovies(movies: Movie[]): React.ReactNode {
        if (!movies.length) {
            return null
        }

        return (
            <div className="top-movies-list-container">
                { movies.map((movie, index) =>
                    <MovieCard
                        key={ `top-movie-${index}` }
                        movie={ movie }
                    />
                )}
            </div>
        )
    }

    renderNoMoviesMessage(): React.ReactNode {
        if (this.props.isLoadingTopMovies) {
            return null
        }

        if (!this.props.topMovies.length) {
            return (
                <p className="no-movies-found-msg">
                    Sorry but there are no movies to list.
                </p>
            )
        }
    }

    render() {
        const { isLoadingTopMovies, didLoadingTopMoviesFail, topMovies,
            currentPage, totalPages, getTopMovies
        } = this.props

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
                        currentPage <= 1 &&
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
                </div>
                <InfiniteScroller
                    pageStart={0}
                    loadMore={ () => getTopMovies(currentPage + 1) }
                    hasMore={ currentPage < totalPages }
                    loader={
                        <div className="loading-animation-container">
                            <div className="bounce-loader-container">
                                <BounceLoader
                                    color={ BLUE_FOR_BTNS_AND_LINKS }
                                    sizeUnit={ "px" }
                                    size={ 80 }
                                />
                            </div>
                            <p className="loading-more-msg">Loading more top movies...</p>
                        </div>
                    }
                    initialLoad={ false }
                    threshold={ 100 }
                >
                    { this.renderListOfTopMovies(topMovies) }
                    { this.renderNoMoviesMessage() }
                </InfiniteScroller>
            </div>
        )
    }
}

const mapStateToProps = (state: RootState) => {
    const { isLoading, didLoadingFail, topMovies, currentPage, totalPages,
        totalResults, pageSize
    } = state.movies.topMoviesData

    return {
        isLoadingTopMovies: isLoading,
        didLoadingTopMoviesFail: didLoadingFail,
        topMovies,
        pageSize,
        currentPage,
        totalPages,
        totalResults
    }
}

const actionCreators = dispatch => {
    const { getTopMovies } = MoviesActions
    const neededActions = { getTopMovies }

    return bindActionCreators(neededActions, dispatch)
}

export default connect(mapStateToProps, actionCreators)(TopMovies)
