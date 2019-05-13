declare interface RootState {
    movies: MoviesState
}

declare interface MoviesState {
    topMoviesData: {
        topMovies: TopMovie[]
        isLoading: boolean
        didLoadingFail: boolean
    }
}

declare interface TopMovie {
    id: number
    title: string
    overview: number
    voteAverage: number
    voteCount: number
    releaseDate: string
    posterUrl: string | null
}

declare type ApiCall = {
    url: string
    method?: "GET" | "POST" | "PUT" | "DELETE"
    query?: object
}
