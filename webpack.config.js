var path = require('path');



module.exports = {

    context: path.resolve('src'),


    entry: "./app/app.js",


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
            }
        ]
    },

    resolve : {
        extensions : ['', '.js']
    }

};