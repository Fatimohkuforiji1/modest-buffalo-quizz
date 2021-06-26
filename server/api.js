import { Router } from "express";
import pool from "./db";
const router = new Router();

//
//UTILITY FUNCTIONS
// SQL QUERIES

//---------------------------READ---------------------------
router.get("/", (_, res) => {
  res.json({ message: "Hello, world!" });
});

router.get("/quizzes", (_, res) => {
  const getQuizzes = `SELECT * FROM quizzes`;
  pool
    .query(getQuizzes)
    // .then(result => res.json(result))
    .then((data) => res.send(data.rows))
    .catch((error) => res.send(error));
});

router.get("/teachers", (_, res) => {
  const sql = `SELECT * FROM teachers`;
  pool
    .query(sql)
    // .then(result => res.json(result))
    .then((data) => res.send(data.rows))
    .catch((error) => res.send(error));
});

router.get("/students", (_, res) => {
  const sql = `SELECT * FROM students`;
  pool
    .query(sql)
    // .then(result => res.json(result))
    .then((data) => res.send(data.rows))
    .catch((error) => res.send(error));
});

router.get("/dashboard/student/:id", function (req, res) {
  const studentId = req.params.id;

  pool
    .query(
      `SELECT s.id,s.first_name, s.last_name, g.group_name
FROM students AS s INNER JOIN groups AS g ON s.groups_id = g.id
WHERE s.id = $1`,
      [studentId]
    )
    .then((result) => {
      if (result.rowCount !== 1) {
        return res.status(400).send({
          result: `FAILURE`,
          message: `student not found in the database`,
        });
      }
      const query = `SELECT t.first_name, t.last_name, z.title, z.date_added, sum(CASE WHEN r.is_correct THEN 1 ELSE 0 END), count(r.id)
FROM student_quiz_answers AS r
INNER JOIN questions AS q ON r.question_id = q.id
INNER JOIN quizzes AS z ON q.quiz_id = z.id
INNER JOIN teachers AS t ON z.teacher_id = t.id
WHERE r.student_id =$1
GROUP BY z.id, t.first_name, t.last_name
ORDER BY z.date_added;`;
      pool
        .query(query, [studentId])
        .then((result2) => {
        res.send({ ...result.rows[0], quizzes: result2.rows });
        })
        .catch((e) => {
          console.error(e.stack);
          res.status(500).send({
            result: `FAILURE`,
            message: `FATAL ERROR: Internal Server Error`,
          });
        });
    });
});

//-------------------------------

//--------------------------WRITE--------------------------
// router.post("/register", (req, res) => {
//   console.log(req.body);
//   const newRegFirstName = req.body.firstName;
//   const newRegLastName = req.body.lastName;
//   const newRegEmail = req.body.email;
//   const newRegPassword = req.body.password;
//   const newCity = req.body.city;
//   const newCountry = req.body.country;
//   const teacherQuery = `INSERT INTO teachers(first_name, last_name, email, user_password, city, country) VALUES ($1, $2, $3, $4, $5, $6) RETURNING ID`;
//   // const regExpression = /^[a-zA-Z0-9 -]{1,30}$/;

//   // if(!regExpression.exec(newRegFirstName)){
//   // 	res.status(500).send(error)
//   // } else{
//   pool
//     .query(teacherQuery, [
//       newRegFirstName,
//       newRegLastName,
//       newRegEmail,
//       newRegPassword,
//       newCity,
//       newCountry,
//     ])
//     .then((result) => res.status(201).json(result.rows[0]))
//     .catch((error) => res.status(500).json(error));
//   // }
// });

//-----------------------------------------CREATE-----------------------------------------
router.post("/register/teachers", (req, res) => {
  const { firstName, lastName, email, password, city, country } = req.body;
  const teacherQuery = `INSERT INTO teachers(first_name, last_name, email, user_password, city, country) VALUES ($1, $2, $3, $4, $5, $6) returning id`;

  pool
    .query(teacherQuery, [firstName, lastName, email, password, city, country])
    .then((result) => {
      if (result.rowCount > 0) {
        res.status(201).send({
          result: `SUCCESS`,
          message: `A new post has been created in the database`,
        });
      }
    })
    .catch((e) => {
      console.error(e.stack);
      res.status(500).send({
        result: `FAILURE`,
        message: `FATAL ERROR: Internal Server Error`,
      });
    });
});

router.post("/register/students", (req, res) => {
  const { firstName, lastName, email, password, groupsId, city, country } =
    req.body;
  const studentsQuery = `INSERT INTO students(first_name, last_name, email, user_password,groups_id, city, country) VALUES ($1, $2, $3, $4, $5, $6,$7) returning id`;
  pool
    .query(studentsQuery, [
      firstName,
      lastName,
      email,
      password,
      groupsId,
      city,
      country,
    ])
    .then((result) => {
      if (result.rowCount > 0) {
        res.status(200).send({
          result: `SUCCESS`,
          message: `A new post has been created in the database`,
        });
      }
    })
    // .catch((error) => res.status(500).json(error));
    .catch((e) => {
      console.error(e.stack);
      res.status(500).send({
        result: `FAILURE`,
        message: `FATAL ERROR: Internal Server Error`,
      });
    });
});

router.get("/groups", (_, res) => {
  const sql = `SELECT * FROM groups`;
  pool
    .query(sql)
    .then((data) => res.send(data.rows))
    .catch((error) => res.send(error));
});

//-----------------------------------------------------------
router.get("/dashboard/students", (req, res) => {
  const { firstName, lastName, email, password, city, country } = req.body;
  const studentsQuery = `INSERT INTO students(first_name, last_name, email, user_password, city, country) VALUES ($1, $2, $3, $4, $5, $6) returning id`;
  pool
    .query(studentsQuery, [firstName, lastName, email, password, city, country])
    .then((result) => {
      if (result.rowCount > 0) {
        res.status(201).send({
          result: `SUCCESS`,
          message: `A new post has been created in the database`,
        });
      }
    })
    // .catch((error) => res.status(500).json(error));
    .catch((e) => {
      console.error(e.stack);
      res.status(500).send({
        result: `FAILURE`,
        message: `FATAL ERROR: Internal Server Error`,
      });
    });
});

export default router;
