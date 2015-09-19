var express = require('express');
var router = express.Router();
var auth = require('../authentication/passportConfig.js');
var passport = require('passport');

router.use(function (req, res, next) {
    if(!auth.loggedIn(req))
    {
        res.redirect("/login");
    }
    next();
});

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

module.exports = router;
