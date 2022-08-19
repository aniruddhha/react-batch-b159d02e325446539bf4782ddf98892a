const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

    entry: './src/app.js',
    mode: 'development',
    output: {
        filename: '[name].[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/react', '@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [/*"style-loader",*/ MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test : /\.(png|jpg|svg)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        })
    ]
};