//connect db with server localhost:5000
const Pool = require("pg").Pool;

//const pool = new Pool();

const db = new Pool({
  host: "localhost",
  user: "postgres",
  password: "Zxcv@24423",
  port: 5432,
  database: "todos"
});

module.exports = db;