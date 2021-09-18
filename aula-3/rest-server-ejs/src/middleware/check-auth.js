const bcrypt = require('bcrypt');
const User = require('../models/user');
const checkAuth = (request, response, next) => {

  // verify auth credentials
  let isValid = false;
  const token = request.headers.authorization;
  if (token) {
    const base64Credentials = token.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');
    if (/ZG0xMjQ6bm90VzM0a1BAc3M=/.test(token)) {
      request.session.isLoggedIn = true;
      next();
    } else {
      notAuthorized(request, response); //Rejeita o login
    }
  } else if (request.session.isLoggedIn){
    next();
  } else {
    compare(request, response, next);
  }
}

const compare = (request, response, next) => {
  let name = request.body.name;
  User.findOne({ email: name }).then(user => {
    if (!user) {
      notAuthorized(request, response); //Rejeita o login
    } else {
      bcrypt.compare(request.body.password, user.password)
        .then(doMatch => {
          if (doMatch) {
            request.session.isLoggedIn = true;
            request.session.user = user;
            next(); // Login com sucesso
          } else {
            notAuthorized(request, response); //Rejeita o login
          }
        })
        .catch(err => {
          notAuthorized(request, response); //Rejeita o login
        });
    }
  });
}

const notAuthorized = (request, response) => {
  request.session.isLoggedIn = false;
  request.session.user = null;
  const HttpStatusNotAuthorized = 401;
  const errorInfo = {
    status: HttpStatusNotAuthorized,
    message: 'Not authorized'
  };

  response
    .status(HttpStatusNotAuthorized)
    .json(errorInfo);
}
module.exports = checkAuth;