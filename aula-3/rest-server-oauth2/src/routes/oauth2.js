const express = require('express');
const passport = require('passport');
const UserRole = require('../models/user-role');
const router = express.Router();

router.get('/', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
  function (req, res) {
    // Successful authentication, redirect home.
    if (UserRole.Admin == req.user.role) {
      res.redirect('/api/questions');
    } else {
      res.redirect('/');
    }
  });
router.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/google');
});

module.exports = router;