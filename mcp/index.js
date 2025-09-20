const { Pool } = require("pg");
require('dotenv').config()

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

const pool = new Pool({
    host: "localhost",
    user: DB_USER,
    password: DB_PASSWORD,
    database: "research_db",
    port: 5432
});

pool.query("SELECT NOW()", (err, res) => {
    if (err) console.error(err);
    else console.log("PostgreSQL time:", res.rows[0]);
    pool.end();
});
