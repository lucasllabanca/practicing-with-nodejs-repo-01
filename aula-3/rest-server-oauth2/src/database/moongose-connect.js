const mongoose = require('mongoose');

const moongooseConnect = (callback) => {
    mongoose.connect("mongodb+srv://dm124-admin:Hiy1RLmBE3cbc7dV@clusterdm124.o0qmk.mongodb.net/questionsDatabase?retryWrites=true&w=majority")
  .then(callback())
  .catch(err => console.log(err));
}
    
module.exports = moongooseConnect;