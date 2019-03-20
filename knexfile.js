const path = require("path");

module.exports = {
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
	}
	}
};
