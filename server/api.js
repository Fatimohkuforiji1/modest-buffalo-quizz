import { Router } from "express";
import { Pool } from "pg";
import { cors } from "cors";


const pool = new Pool({
  user: "Umm Muhammad",
  host: "localhost",
  database: "modest_buffalo_quizz",
  password: "akande1",
  port: 5432,
});

pool.connect();


const router = new Router();

router.get("/", (_, res) => {
	// console.log(pool);
	res.json({ message: "Hello, world!" });
});

router.get("/teachers", function (req, res) {
  pool
    .query("SELECT * FROM teacher")
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});

router.post("/teachers", (req, res) => {
  const newTeacherName = req.body.name;
  const newTeacherAddress = req.body.address;
   const teacherQuery = `INSERT INTO teacher(name, address) VALUES ($1, $2) RETURNING ID`;
  const regExpression = /^[a-zA-Z0-9 -]{1,30}$/;

if(!regExpression.exec(newTeacherName)){
	res.status(500).send(error)
} else{
  pool.query(teacherQuery, [newTeacherName, newTeacherAddress])
    .then((result) => res.status(201).send(result.rows[0]))
    .catch((error) => res.status(500).send(error));
}
});


export default router;
