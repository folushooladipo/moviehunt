import { Request, Response } from "express"
import * as dotenv from "dotenv"
import * as superagent from "superagent"

dotenv.config()
const movieApiKey = process.env.MOVIE_API_KEY
const REQUEST_TIMEOUT = 60000
const TMDB_DEFAULT_PAGE_NUMBER = 1
const TMDB_DEFAULT_PAGE_SIZE = 20
const TMDB_IMG_DEFAULT_DIMENSIONS = "w185"
const TMDB_IMG_BASE_URL = `https://image.tmdb.org/t/p/${ TMDB_IMG_DEFAULT_DIMENSIONS }`

export function getTopMovies(req: Request, res: Response) {
    const { pageNumber } = req.query
    const ajaxClient = superagent.get
    const url = "https://api.themoviedb.org/3/discover/movie"
    const query = {
        api_key: movieApiKey,
        primary_release_year: (new Date()).getFullYear(),
        sort_by: "popularity.desc",
        "vote_average.gte": 7,
        "vote_count.gte": 20,
        include_adult: false,
        include_video: true,
        page: pageNumber > 1 ? pageNumber : TMDB_DEFAULT_PAGE_NUMBER
    }

    ajaxClient(url)
        .query(query)
        .timeout(REQUEST_TIMEOUT)
        .end((error, results) => {
            if (error) {
                return res
                    .status(error.status || 400)
                    .json({
                        error
                    })
            }

            const topMoviesRawData = JSON.parse(results.text)
            const topMovies = topMoviesRawData.results.map(movie => {
                const posterPath = movie.poster_path || movie.backdrop_path
                const posterUrl = posterPath ?
                    `${ TMDB_IMG_BASE_URL }${ posterPath }` :
                    null

                return {
                    id: movie.id,
                    title: movie.title,
                    overview: movie.overview,
                    voteCount: movie.vote_count,
                    voteAverage: movie.vote_average,
                    releaseDate: movie.release_date,
                    posterUrl
                }
            })
            const { page: currentPage, total_results: totalResults,
                total_pages: totalPages
            } = topMoviesRawData

            res.json({
                topMovies,
                pageSize: TMDB_DEFAULT_PAGE_SIZE,
                currentPage,
                totalPages,
                totalResults
            })
        })
}
