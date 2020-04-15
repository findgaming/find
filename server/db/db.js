const { Pool } = require('pg');

const myURI = process.env.PG_URI;

const pool = new Pool({
  connectionString: myURI
});

const URI = process.env.PG_URI || myURI;

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
