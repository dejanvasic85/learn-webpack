var path = require('path');
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js');


module.exports = {

    context: path.resolve('src/app'),


    entry: {
        app : './app.js'
    },


    output: {
        path: path.resolve('dist'),
        publicPath: '/app',
        filename: "bundle.js"
    },


    devServer: {
        contentBase: 'public'
    },

    module: {

        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader'
            }
        ],


        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },

            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader' // first run through css then the style loader
            },

            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!sass-loader' // first run through css then the style loader
            }
        ]
    },

    resolve : {
        extensions : ['', '.js']
    }

};