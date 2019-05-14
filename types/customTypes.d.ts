declare interface RootState {
    movies: MoviesState
}

declare interface Movie {
    id: number
    title: string
    overview: string
    voteAverage: number
    voteCount: number
    releaseDate: string
    posterUrl: string | null
}

declare interface MoviesState {
    topMoviesData: {
        isLoading: boolean
        didLoadingFail: boolean
        topMovies: Movie[]
        pageSize: number
        currentPage: number
        totalPages: number
        totalResults: number
    }
}

declare type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE"

declare type ApiCall = {
    url: string
    method?: HTTPMethod
    query?: object
}
