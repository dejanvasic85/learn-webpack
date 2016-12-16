var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {

    context: path.resolve('src/app'),


    entry: {
        koApp: './koApp.js',
        reactApp: './reactApp.js'
    },


    output: {
        path: path.resolve('dist'),
        publicPath: '/assets',
        filename: "[name].bundle.js"
    },


    plugins: [
        new ExtractTextPlugin("styles.css")
    ],

    devServer: {
        contentBase: 'public'
    },

    module: {

        // preLoaders: [
        //     {
        //         test: /\.js$/,
        //         exclude: /node_modules/,
        //         loader: 'jshint-loader'
        //     }
        // ],


        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },

            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader') // first run through css then the style loader
            },

            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!sass-loader') // first run through css then the style loader
            },

            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=10000' // Limit the size (kb)
            }
        ]
    },

    resolve: {
        extensions: ['', '.js']
    }

};