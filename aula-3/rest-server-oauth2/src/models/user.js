const UserRole = require('./user-role');
const mongoose = require('mongoose');
	const Schema = mongoose.Schema;
	const userSchema = new Schema({
		email: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		},
		role: {
			enum: Object.values(UserRole),
			required: false
		},
		googleId: {
			type: String,
			required: false
		}
	});
	
module.exports = mongoose.model('User', userSchema);