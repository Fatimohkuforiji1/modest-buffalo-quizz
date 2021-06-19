import { Router } from "express";
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  user: process.env.REACT_APP_PGUSER,
  host: process.env.REACT_APP_PGHOST,
  database: process.env.REACT_APP_PGDATABASE,
  password: process.env.REACT_APP_PGPASSWORD,
  port: process.env.REACT_APP_PGPORT
});

pool.connect();

const router = new Router();

router.get("/", (_, res) => {
	res.json({ message: "Hello, world!" });
});

//Routes for login details 
router.get("/register", function (req, res) {
  console.log(req.body);
  res.send("message received");

});

router.post("/register", (req, res) => {
  console.log(req.body)
  res.send("message received");
});


 //Routes for teacher
router.get("/teacher", function (req, res) {
  console.log(req.body);
  res.send("message received");
  
});

router.post("/teacher", (req, res) => {
  console.log(req.body)
  res.send("message received");
});


 //Routes for student
router.get("/student", function (req, res) {
  console.log(req.body);
  res.send("message received");
  
});

router.post("/student", (req, res) => {
  console.log(req.body)
  res.send("message received");
});
 //Routes for module
router.get("/module", function (req, res) {
  console.log(req.body);
  res.send("message received");
  
});

router.post("/module", (req, res) => {
  console.log(req.body)
  res.send("message received");
});

//Routes for quizzes
router.get("/quiz", function (req, res) {
  console.log(req.body);
  res.send("Quiz received");
  
});

router.post("/quiz", (req, res) => {
  console.log(req.body)
  res.send("Quiz received");

});

  //Routes for question 
router.get("/question", function (req, res) {
  console.log(req.body);
  res.send("message received");
  
});

router.post("/question", (req, res) => {
  console.log(req.body)
  res.send("message received");
});


 //Routes for answers
router.get("/answer", function (req, res) {
  console.log(req.body);
  res.send("message received");
  
});

router.post("/answer", (req, res) => {
  console.log(req.body)
  res.send("message received");
});







// router.get("/teachers", function (req, res) {
//   pool
//     .query("SELECT * FROM teacher")
//     .then((result) => res.json(result.rows))
//     .catch((e) => console.error(e));
// });

// router.post("/teachers", (req, res) => {
//   const newTeacherName = req.body.name;
//   const newTeacherAddress = req.body.address;
//    const teacherQuery = `INSERT INTO teacher(name, address) VALUES ($1, $2) RETURNING ID`;
//   const regExpression = /^[a-zA-Z0-9 -]{1,30}$/;

// if(!regExpression.exec(newTeacherName)){
// 	res.status(500).send(error)
// } else{
//   pool.query(teacherQuery, [newTeacherName, newTeacherAddress])
//     .then((result) => res.status(201).send(result.rows[0]))
//     .catch((error) => res.status(500).send(error));
// }
// });


export default router;
