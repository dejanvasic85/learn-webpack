module.exports = {

    entry: "./src/app/app.js",


    output: {
        filename: "./dist/app.js"
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