const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query:{
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin()
    ],
    stats:{
        colors: true
    },
    devtool: 'source-map'
};