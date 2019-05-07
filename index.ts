import * as Express from "express"
import * as path from "path"
import * as dotenv from "dotenv"
import * as webpack from "webpack"
import * as webpackDevMiddleware from "webpack-dev-middleware"
import * as webpackHotMiddleware from "webpack-hot-middleware"

import * as webpackConfig from "./webpack.config"

dotenv.config()
const DEFAULT_PORT = 5000
const port = process.env.PORT || DEFAULT_PORT

const app = Express()
const nodeEnv = process.env.NODE_ENV
if (!nodeEnv || nodeEnv === "development") {
    const webpackCompiler = webpack(webpackConfig)

    // This will serve up bundle.js at localhost:PORT/ i.e the root path.
    app.use(webpackDevMiddleware(webpackCompiler, {
        publicPath: webpackConfig.output.publicPath
    }))
    app.use(webpackHotMiddleware(webpackCompiler))
} else {
    // Serve up the transpiled bundle.js
    app.use(Express.static(path.join(__dirname, "./frontend-code")))
}

// Serve up assets
app.use(Express.static(path.join(__dirname, "./assets")))

app.use("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./", "index.html"))
})

app.listen(port, () => {
    console.log(`App now running on port ${port}.`)
})
