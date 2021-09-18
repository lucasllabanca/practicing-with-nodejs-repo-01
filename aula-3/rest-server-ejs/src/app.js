const express = require('express');
const app = express();
const session = require('express-session'); //Used for session management with express
const path = require('path'); //Used for file/resource path solving
const ejs = require('ejs'); //Embedded JavaScript Templating
const bodyParser = require('body-parser'); //Needed to parse request body

// Middlewares
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const notFound = require('./middleware/not-found');
const { graphqlHTTP } = require('express-graphql');
const graphqlSchema = require('./graphql/schema');
const graphqlResolvers = require('./graphql/resolvers');

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(session({secret: 'no one will know', resave: false, saveUninitialized: false}));

// View
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/client/public'));
app.set('views', path.join(__dirname, '/client/views/pages'));

// Routes
const pagesRouter = require('./routes/pages');
app.use('/', pagesRouter);
const questionsRouter = require('./routes/questions');
app.use('/api/questions', questionsRouter);
app.use('/graphql', graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true
}));
// Missing routes
app.use(notFound);

module.exports = app;