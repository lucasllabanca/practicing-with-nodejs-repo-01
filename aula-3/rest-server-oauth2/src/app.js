const express = require('express');
const passport = require('passport');
const app = express();
const session = require('express-session');
// Middlewares
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const notFound = require('./middleware/not-found');
require('./middleware/passport');

app.use(session({secret: 'no one will know', resave: false, saveUninitialized: false}));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
// Routes
const questionsRouter = require('./routes/questions');
app.use('/api/questions', questionsRouter);
const oauth2Router = require('./routes/oauth2');
app.use('/google', oauth2Router);
app.get('/failed', (req, res) => res.send('Login failed'));

// Missing routes
app.use(notFound);

module.exports = app;