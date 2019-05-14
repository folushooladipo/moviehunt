import { Router } from "express"

import { getTopMovies } from "../controllers/MoviesController"

const moviesRoute = Router()

moviesRoute.get("/getTopMovies", getTopMovies)

export default moviesRoute
