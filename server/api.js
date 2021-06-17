import { Router } from "express";
import { Pool } from "pg";
const pool = new Pool({
  user: "",
  host: "localhost",
  database: "",
  password: "",
  port: 5432,
});
pool.connect();
const router = new Router();

router.get("/", (_, res) => {
	res.json({ message: "Hello, world!" });
});

export default router;
