var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/startup', function (req, res, next) {
    User.count(function(err, count){
        if(count == 0)
            res.render('startup');
        else
            res.redirect('/login');
    })
});

router.post('/startup', function (req, res, next) {
    User.count(function (err, count) {
        if (count != 0)
            res.redirect("/login")

        // This means we can actually set up this user
        var admin = new User({username: req.param.username,
                              password: req.param.password})
    })
});

router.get('/login', function (req, res, next) {
    User.count(function (err, count) {
        if (count == 0) {
            res.redirect('/startup');
        }
        else {
            res.render('login');
        }
    })
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/login',
    failureFlash: true
}));

module.exports = router;