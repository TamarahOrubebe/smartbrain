require("dotenv").config();
const knex = require("knex");

const db = knex({
	// connect to your own database here:
	client: 'pg',
	connection: {
		host: '127.0.0.1',
		user: 'postgres',
		password: process.env.POSTGRES_PASSWORD,
		database: 'smartbrain',
	},
});

module.exports = db;
