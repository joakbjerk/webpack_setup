const webpack = require('webpack');
const path = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: `${path.JS}/index.js`,
    output: {
        path: path.DIST,
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${path.HTML}/index.html`
        }),
        new ExtractTextPlugin('style.bundle.css'),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    use: 'css-loader',
                }),
            },
            {
                test: /\.(png|jpg|gif)$/,
                exclude: /node_modules/,
                use: [
                    'file-loader',
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.png', '.jpg', '.gif']
    },
    devServer: {
        contentBase: path.SRC,
        compress: true,
        port: 9000
    }
}

