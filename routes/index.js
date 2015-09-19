var express = require('express');
var router = express.Router();
var passport = require('passport');
var bcrypt = require('bcrypt');
var User = require('../models/user');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/startup', function (req, res, next) {
    User.count(function (err, count) {
        if (count == 0)
            res.render('startup');
        else
            res.redirect('/admin/login');
    })
});

router.post('/startup', function (req, res, next) {
    User.count(function (err, count) {
        if (count != 0)
            res.redirect("/login")

        // This means we can actually set up this user
        console.log(req.body.password);
        bcrypt.hash(req.body.password, 8, function (err, hash) {
            var admin = new User({
                username: req.body.username,
                password: hash,
                email: req.body.email,
                name: req.body.fullname
            });
            admin.save();

            res.redirect('/admin/login');
        });
    })
});

module.exports = router;