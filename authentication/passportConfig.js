var passport = require('passport'),
    localStrategy = require('passport-local').Strategy;

passport.use(new localStrategy(
    function (username, password, done) {
        if (username == "paul") {
            return done(null, {_id:1,username: "paul"});
        }
        else {
            return done(null, false);
        }
    }
));