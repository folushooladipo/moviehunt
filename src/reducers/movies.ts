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
        const topMovies: Movie[] = action.payload.topMovies

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
