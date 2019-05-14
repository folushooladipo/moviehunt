const FETCH_TOP_MOVIES_PENDING = "FETCH_TOP_MOVIES_PENDING"
const FETCH_TOP_MOVIES_FAILURE = "FETCH_TOP_MOVIES_FAILURE"
const FETCH_TOP_MOVIES = "FETCH_TOP_MOVIES"

const defaultState: MoviesState = {
    topMoviesData: {
        isLoading: false,
        didLoadingFail: false,
        topMovies: [],
        pageSize: 0,
        currentPage: 0,
        totalPages: 0,
        totalResults: 0
    }
}

const reducers = {
    [FETCH_TOP_MOVIES_PENDING]: (state: MoviesState): MoviesState => ({
        ...state,
        topMoviesData: {
            ...state.topMoviesData,
            isLoading: true,
            didLoadingFail: false
        }
    }),
    [FETCH_TOP_MOVIES_FAILURE]: (state: MoviesState): MoviesState => ({
        ...state,
        topMoviesData: {
            ...state.topMoviesData,
            isLoading: false,
            didLoadingFail: true
        }
    }),
    [FETCH_TOP_MOVIES]: (state: MoviesState, action): MoviesState => {
        const newState = { ...state }
        const { topMovies: additionalTopMovies, pageSize, currentPage,
            totalPages, totalResults
        } = action.payload
        const topMovies = currentPage > 1 ?
            newState.topMoviesData.topMovies.concat(additionalTopMovies) :
            additionalTopMovies

        newState.topMoviesData = {
            ...newState.topMoviesData,
            isLoading: false,
            topMovies,
            pageSize,
            currentPage,
            totalPages,
            totalResults
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
    getTopMovies: (pageNumber?: number) => {
        const type = FETCH_TOP_MOVIES
        const query = {
            pageNumber: pageNumber && pageNumber > 1 ? pageNumber : 1
        }
        const apiCall: ApiCall = {
            url: "/movies/getTopMovies",
            query
        }

        return { type, apiCall }
    }
}
