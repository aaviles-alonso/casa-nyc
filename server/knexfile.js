// Update with your config settings.
require("dotenv").config();
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    // CHECK ENV EXAMPLE
    password: process.env.DB_LOCAL_PASSWORD,
    database: "casa-nyc",
    charset: "utf8",
  },
};
