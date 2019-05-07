const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const dotenv = require("dotenv");

dotenv.config();
const nodeEnv = process.env.NODE_ENV

module.exports = {
    mode: "development",
    entry: {
        main: !nodeEnv || nodeEnv === "development" ?
            [
                "./src/index.tsx",
                "webpack-hot-middleware/client?reload=true"
            ] :
            "./src/index.tsx"
    },
    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist/frontend-code"),
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ ".tsx", ".ts", ".js" ]
    }
};
