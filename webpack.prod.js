const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
    plugins: [
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new ExtractTextPlugin('styles/[name].bundle.css'),
    ],
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    use: [{ loader: 'css-loader', options: { minimize: true } }, 'postcss-loader', 'sass-loader']
                })
            },
        ],
    }
});