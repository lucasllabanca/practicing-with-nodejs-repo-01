const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 8080;

mongoose.connect("mongodb+srv://dm124-admin:Hiy1RLmBE3cbc7dV@clusterdm124.o0qmk.mongodb.net/questionsDatabase?retryWrites=true&w=majority")
  .then(() => {
    //Inicia o servidor
    http.createServer(app)
      .listen(port, () => {
        console.log(`Server up on http://${host}:${port}`);
      })
  })
  .catch();
