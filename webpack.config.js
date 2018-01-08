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
                test: /\.(sass|scss)$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
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
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: path.SRC,
        compress: true,
        port: 9000
    }
}

