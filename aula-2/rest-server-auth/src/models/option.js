const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const optionSchema = new Schema({
    option: {
        type: String,
        ref: 'Option',
        required: true
    }
});
module.exports = mongoose.model('Option', optionSchema);