import { Router } from "express"

import movies from "./movies"

const indexRouter = Router()

indexRouter.use("/movies", movies)

export default indexRouter
