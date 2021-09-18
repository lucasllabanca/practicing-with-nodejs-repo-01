const app = require('./app');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 8080;

io.on('connection', (socket) =>{
  console.log('New connection');
  // io.emit Broadcast
  // socket.emit client specific
  socket.emit('new question', {
    event: new Date()
  });
});

mongoose.connect("mongodb+srv://dm124-admin:Hiy1RLmBE3cbc7dV@clusterdm124.o0qmk.mongodb.net/questionsDatabase?retryWrites=true&w=majority")
  .then(() => {
    //Inicia o servidor
    http.listen(port, () => {
        console.log(`Server up on http://${host}:${port}`);
      })
  })
  .catch();

  app.locals.io = io;