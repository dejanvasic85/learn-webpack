var express = require('express');
var path = require('path');
var logger = require('morgan');
var routes = require('./routes');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use('/', routes);

console.log(app.get('env'));

if (app.get('env') === 'development') {
    var webpackMiddleware = require('webpack-dev-middleware');
    var webpack = require('webpack');
    var config = require('../webpack.config');

    app.use(webpackMiddleware(webpack(config), {
        publicPath: '/assets', // must give this and it will override config

        headers: {'X-Custom-Webpack-Header': 'yes'},

        stats: {
            colors: true
        }
    }));
}

// catch 404 and forward
app.use(function(req, res, next){
    var error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.listen(4004, function() {
    console.log('listening on 4004');
});
