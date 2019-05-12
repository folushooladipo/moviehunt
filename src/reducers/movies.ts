const FETCH_TOP_MOVIES_LIST_PENDING = "FETCH_TOP_MOVIES_LIST_PENDING"
const FETCH_TOP_MOVIES_LIST_FAILURE = "FETCH_TOP_MOVIES_LIST_FAILURE"
const FETCH_TOP_MOVIES_LIST = "FETCH_TOP_MOVIES_LIST"

const defaultState: MoviesState = {
    topMoviesData: {
        topMovies: [],
        isLoading: false,
        didLoadingFail: false
    }
}

const reducers = {
    [FETCH_TOP_MOVIES_LIST_PENDING]: (state: MoviesState): MoviesState => ({
        ...state,
        topMoviesData: {
            ...state.topMoviesData,
            isLoading: true,
            didLoadingFail: false
        }
    }),
    [FETCH_TOP_MOVIES_LIST_FAILURE]: (state: MoviesState): MoviesState => ({
        ...state,
        topMoviesData: {
            ...state.topMoviesData,
            isLoading: false,
            didLoadingFail: true
        }
    }),
    [FETCH_TOP_MOVIES_LIST]: (state: MoviesState, action): MoviesState => {
        const newState = { ...state }
        const { topMoviesData } = action.payload
        const topMovies: TopMovie[] = topMoviesData.results.map(movie => ({
            id: movie.id,
            title: movie.title,
            overview: movie.overview,
            voteCount: movie.vote_count,
            voteAverage: movie.vote_average,
            releaseDate: movie.release_date
        }))

        newState.topMoviesData = {
            ...newState.topMoviesData,
            isLoading: false,
            topMovies
        }

        return newState
    }
}

export default function reducer(state = defaultState, action) {
    return !!reducers[action.type] ?
        reducers[action.type](state, action) :
        state
}

export const MoviesActions = {
    getTopMovies: () => {
        const type = FETCH_TOP_MOVIES_LIST
        const apiCall: ApiCall = {
            url: "/movies/getTopMovies"
        }

        return { type, apiCall }
    }
}
