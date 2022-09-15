const pg = require("pg");

const db = new pg.Pool({
	host: process.env.DB_HOST,
	user: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	port: process.env.DB_PORT,
});

db.connect((err) => {
	if (err) {
		console.log(err);
	}
	console.log("database terhubung");
});

module.exports = db;
