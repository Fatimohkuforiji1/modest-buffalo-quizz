import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.DATABASE_URL);

const pool = new Pool({
  user: process.env.REACT_APP_PGUSER,
  host: process.env.REACT_APP_PGHOST,
  database: process.env.REACT_APP_PGDATABASE,
  password: process.env.REACT_APP_PGPASSWORD,
  port: process.env.REACT_APP_PGPORT,
});
pool.connect();

export default pool;
