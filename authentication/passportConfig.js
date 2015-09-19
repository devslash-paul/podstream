var passport = require('passport'),
    localStrategy = require('passport-local').Strategy,
    bcrypt = require('bcrypt'),
    User = require('../models/user');

passport.use(new localStrategy(
    function (username, password, done) {

        User.findOne({username: username}, function (err, doc) {
            if (err) return done(err);

            if (doc) {
                bcrypt.compare(password, doc.password, function (err, res) {
                    console.log(err);
                    if (err) return done(err);
                    if (res) return done(null, doc);
                    return done(null, false);
                })
            }
            else {
                return done(null, false);
            }
        })
    }
));
