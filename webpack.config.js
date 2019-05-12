const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const dotenv = require("dotenv");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

dotenv.config();
const nodeEnv = process.env.NODE_ENV

module.exports = {
    mode: "development",
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                }
            }
        }
    },
    entry: {
        main: !nodeEnv || nodeEnv === "development" ?
            [
                // TODO: Rename to ./client/index....
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
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: 'stylesheets/style.css'
        }),
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
            }, {
                test: /\.css$/,
                use: [ MiniCssExtractPlugin.loader, "css-loader" ]
            }, {
                test: /\.styl$/,
                use: [ MiniCssExtractPlugin.loader, "css-loader", "stylus-loader" ],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ ".tsx", ".ts", ".js" ]
    }
};
