const { Pool } = require('pg');

const myURI =
  'postgres://xdgqcdxx:4vGk5whniXMfMHP8JdCm-7lo2E5RlaUc@drona.db.elephantsql.com:5432/xdgqcdxx';

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
