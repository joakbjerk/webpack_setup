const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'src/'),
        port: 9000
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new ExtractTextPlugin('styles/[name].bundle.css'),
    ],
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    use: [{ loader: 'css-loader', options: { minimize: false } }, 'postcss-loader', 'sass-loader']
                })
            },
        ],
    }
})

