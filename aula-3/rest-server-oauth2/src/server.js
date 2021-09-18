const http = require('http');
const app = require('./app');
const mongooseConnect = require('./database/moongose-connect');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 8080;

const startServer = () => {
  //Inicia o servidor
  http.createServer(app)
    .listen(port, () => {
      console.log(`Server up on http://${host}:${port}`);
    })
}
mongooseConnect(startServer);
