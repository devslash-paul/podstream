var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');


router.get('/', function (req, res, next) {
  res.render('admin', req.user);
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/admin',
  failureRedirect: '/admin/login'
}));

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

module.exports = router;
