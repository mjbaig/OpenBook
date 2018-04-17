const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ClosureCompilerPlugin = require('webpack-closure-compiler');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json', '.css'],
        modules: [
            path.resolve(__dirname, "src/lib"),
            path.resolve(__dirname, "node_modules"),
            'node_modules'
        ],
        alias: {
            components: path.resolve(__dirname, "src/components"),
            style: path.resolve(__dirname, "src/style"),
            'react': 'preact-compat',
            'react-dom': 'preact-compat'
        }
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: path.resolve(__dirname, 'src'),
                enforce: 'pre',
                use: 'source-map-loader'
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({title: 'OpenBook Welcome!'}),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
};

