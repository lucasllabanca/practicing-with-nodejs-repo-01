const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 8080;
const MONGODB_URI = "mongodb+srv://dm124-admin:Z7OaGGuoYjoifkbo@clusterdm124.vny8c.mongodb.net/questionsDatabase?retryWrites=true&w=majority";

http.createServer(app)
  .listen(port, () => {
    console.log(`Server up on http://${host}:${port}`);
  })
// mongoose.connect(MONGODB_URI)
//   .then(() => {
//     //Inicia o servidor
    
//   })
//   .catch();

//   req.session.destroy()
// 	req.session.save(()=>{});
