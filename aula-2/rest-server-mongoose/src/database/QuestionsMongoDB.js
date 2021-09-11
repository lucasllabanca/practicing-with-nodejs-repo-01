const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
let db;
const mongoConnect = (callback) => {

	MongoClient.connect("mongodb+srv://dm124-admin:KVVjuqYoAWZyVa7y@clusterdm124.o0qmk.mongodb.net/questionsDatabase?retryWrites=true&w=majority")
		.then(client => {
			db = client.db(); // client.db('databaseName');
			callback();
		})
		.catch();
};
const getDb = () => {
	if (db) {
		return db;
	}
	throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;