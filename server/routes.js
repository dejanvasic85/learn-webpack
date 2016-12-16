var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index', {title: 'Basic... crap'});
});

router.get('/react', function(req, res){
    res.render('index-react', {
        title: 'basic...react'
    });
});

module.exports = router;