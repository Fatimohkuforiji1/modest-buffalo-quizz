import { Router } from "express";
import { Pool } from "pg";


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
 },
  //don't push from line 12-16;
 
});


// const pool = new Pool({
//   user: "Umm Muhammad",
//   host: "localhost",
//   database: "teachers",
//   password: "",
//   port: 5432,
// });
// client / src / App.js;
// modified: server / api.js;
// modified: server / server.js;
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

router.post("teachers", (req, res) => {
  const newTeacher = req.body.teacher;
  console.log(newTeacher);
  const teacherQuery = `INSERT INTO teacher(name, address) VALUES ($1, $2) RETURNING ID`;
  const regExpression = /^[a-zA-Z0-9 -]{1,30}$/;
if(!regExpression(newTeacher)){
	res.status(500).send(error)
} else{
  pool.query(teacherQuery, [newTeacher])
    .then((result) => res.status(201).send(result.rows[0]))
    .catch((error) => res.status(500).send(error));
}
});

//  if (error) {
//       res.status(500).send(error);
//     } else {
//       res.json(result.rows);

// router.get("/test", (req, res) => {
// 	const allTeachers = "SELECT * FROM teachers"
//   res.json({ message: "Hello, world!" });
// });

export default router;
