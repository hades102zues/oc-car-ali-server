const path = require("path");
const mode = process.env.NODE_ENV || "development";



const configurations = {
	development: {
		client: "pg",
		connection: {
			host: "127.0.0.1",
			user: "postgres",
			password: "postgres_50282409" || process.env.DATABASE_PASS,
			database: "car-ali"
		},
		migrations: {
			directory: path.join(__dirname, "db", "migrations")
		},
		seeds: {
			directory: path.join(__dirname, "db", "seeds")
		}
	},
	production: {
		client: "pg",
		connection: {
			//host: "127.0.0.1",
			user: process.env.POSTGRESQL_USER,
			password: process.env.POSTGRESQL_PASS,
			database: process.env.POSTGRESQL_DATABASE
		},
		migrations: {
			directory: path.join(__dirname, "db", "migrations")
		},
		seeds: {
			directory: path.join(__dirname, "db", "seeds")
		},
		
	}
};

const knex = require("knex")(configurations[mode]);
module.exports = knex;
