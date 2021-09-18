const passport = require('passport');
const User = require('../models/user');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

passport.use(new GoogleStrategy({
    clientID: "294353830604-ih405l4rr20dkn3uid27r1uffkocrohd.apps.googleusercontent.com",
    clientSecret: "RnGb2mi8lu0aiai9LrTbHsz_",
    callbackURL: "http://localhost:8080/google/callback"
  },
  function(accessToken, refreshToken, profile, callback) {
      let userData;
      User.findOne({ googleId: profile.id })
      .then(user =>{
        if (!user) {
            //Create
            User.create({email:profile.emails[0].value, password: profile.displayName, googleId: profile.id})
            .then(user => {
                callback(null, user);
            });
        } else {
            return callback(null, user);  
        }
      })
  .catch(err => console.log(err));
  }
));