const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    context: path.resolve(__dirname, "app"),

    entry: "./view/index.js",

    output: {
        filename: "bundle.[chunkhash].js",
        path: path.resolve(__dirname, "./public")
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',

                query: {
                    presets: ['@babel/preset-env']
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./view/index.html"
        }),

        new CleanWebpackPlugin(),

        // new MiniCssExtractPlugin({
        //     chunkFilename: "[name].[contenthash:8].chunk.css",
        //     filename: "[name].[contenthash:8].css"
        // })
    ],

    performance: {hints: false},
}