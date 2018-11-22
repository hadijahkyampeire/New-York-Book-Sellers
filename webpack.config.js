const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const WebpackNotifierPlugin = require('webpack-notifier');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: './src/app.js',
    mode: process.env.NODE_ENV || 'none',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename:'js/app.js'

    },

    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use: 'css-loader',
                }),
            },
            
        ],
    },

    devServer:{
        port: 4000,
    },
    // plugins
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
        }),

        new WebpackNotifierPlugin(
            {
                alwaysNotify: true,
                contentImage: path.join(__dirname, 'public/logo.png'),
                title:'NY Books'
            }),
        
        new ExtractTextPlugin('style.css')
    ]
};

module.exports = config;