const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

    entry : './src/index.js',
    mode: 'production',
    output : {
        filename : '[name].[contenthash].js'
    },
    module : {
        rules : [
            {
                test : /\.js?$/,
                exclude : /(node_modules)/,
                use :  { 
                    loader : 'babel-loader',
                    options : {
                        presets : [ '@babel/react', '@babel/preset-env' ]
                    }
                }
            },
            {
                test : /\.css$/i,
                use : [ MiniCssExtractPlugin.loader,  'css-loader' ]
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : './src/index.html',
            filename : 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        })
    ]
}