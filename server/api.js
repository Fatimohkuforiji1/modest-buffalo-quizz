import { Router } from "express";
import  pool  from "./db";
const router = new Router();


router.get("/", (_, res) => {
	res.json({ message: "Hello, world!" });
});


router.get("/quizzes", (_, res) => {
  const sql = `SELECT * FROM quizzes`;
  pool.query(sql)
    // .then(result => res.json(result))
    .then(data => res.send(data.rows))
    .catch(error => res.send(error));
});
export default router;
