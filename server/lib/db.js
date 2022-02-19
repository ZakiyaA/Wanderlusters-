const { config } = require('dotenv');
const pg = require('pg');
const Client = pg.Client;

let dbParams = {};
if (process.env.DATABASE_URL) {
  dbParams.connectionString = process.env.DATABASE_URL;
} else {
  dbParams = {
    host: 'localhost',
    port: 5433,
    user: 'user_1',
    password: 'traveller123',
    database: 'travellers'
  };
}

const client = new Client(config);

client.connect(() => {
  console.log('connected to database');
});

module.exports = dbParams, client;
