const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    DIST: path.resolve(__dirname + '/dist'),
    SRC: path.resolve(__dirname + '/src'),
    JS: path.resolve(__dirname + '/src/js'),
    HTML: path.resolve(__dirname + '/src/views'),
    CSS: path.resolve(__dirname + '/src/css'),
}

module.exports = {
    entry: `${PATHS.JS}/index.js`,
    output: {
        path: PATHS.DIST,
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${PATHS.HTML}/index.html`
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: PATHS.SRC,
        compress: true,
        port: 9000
    }
}

