import { Request, Response } from "express"
import * as dotenv from "dotenv"
import * as superagent from "superagent"

dotenv.config()
const movieApiKey = process.env.MOVIE_API_KEY
const REQUEST_TIMEOUT = 60000

export function getTopMovies(req: Request, res: Response) {
    const request = superagent.get
    const url = "https://api.themoviedb.org/3/discover/movie"
    const query = {
        api_key: movieApiKey,
        primary_release_year: (new Date()).getFullYear(),
        sort_by: "vote_average.desc",
        include_adult: false,
        include_video: true
    }

    request(url)
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

            res.json({
                topMoviesData: JSON.parse(results.text)
            })
        })
}
