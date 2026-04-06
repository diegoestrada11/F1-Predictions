import pkg from "pg";
import fs from "fs";

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: {
    ca: fs.readFileSync("./bin/byuicse-psql-cert.pem").toString()
  }
});

// test connection
pool.connect()
  .then(() => console.log("Connected to PostgreSQL ✅"))
  .catch(err => console.error("Connection error ❌", err));

export default pool;