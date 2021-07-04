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
//---------------------QUIZ DETAILS ROUTE-----------------------------
router.get("/quizDetails", (req, res) => {

  const displayQuizzes = `SELECT quiz_description, question, answers.question_id, answer 
FROM quizzes 
INNER JOIN questions ON quizzes.id = questions.quiz_id
INNER JOIN answers ON questions.id = answers.question_id`;
pool
  .query(displayQuizzes)
  // .then(result => res.json(result))
  .then((result) => {  
    res.status(200).json(result.rows)
  }).catch((error) => res.send(error));
});

//----------------------------post answer route-------------------
let stdtAnswerCheck;
let correctAnswerCheck;
// `select student_answer, correct_answer from questions 
// inner join student_quiz_answers on questions.id = student_quiz_answers.question_id;`;
router.post("/answer", (req, res) => {
  res.status(200).json(req.body)
  

  // pool.query(getAnswers)
      
  //   then((result)=> console.log(result.rows))
  //   //   result.rows.map((obj)=>{
  //   //   correctAnswerCheck = [obj.correct_answer]; 
  //   //   })
     
  //   //  console.log(correctAnswerCheck);
  //  .catch((error) => res.status(500).send(error));
});


///------------------------------post route to get save student answers----
// router.put("/savestudentanswers", async (req, res) =>{
//   let correctAnswer ;
//   const {questionId, studentId, studentAnswer} = req.body;
//   const getAnswers = `SELECT correct_answer FROM questions WHERE question.id = '${questionId}' `;
//   await pool.query(getAnswers)
//             .then((result)=>{correctAnswer = result.rows

//             })
//   console.log(correctAnswer)

//   const answersQuery = `(UPDATE student_quiz_answers SET student_answer=$1 WHERE question_id = $2,student_id=$3
//     AND is_correct = $4)`;
//   pool.query(answersQuery, [questionId, studentId,studentAnswer])
//       .then((result)=> res.json(result.rows))
// })


//--------------------------module route -------------------------------
router.get("/modules", (req, res) => {
  const getModules = `SELECT * FROM modules`;
    // console.log(getModule);
  // if(getModules === 'React'){
  //   res.send(result.rows[0])
  // } 
    pool.query(getModules)
    .then((result) => {
      const rows = result.rows;
      const moduleNames = rows.map((row) => {
        return row.module_name
      });
      res.send(moduleNames)
    })
    .catch((error) => res.status(500).send(error));
});
//-------------------------------------------quiz question and answer-----------------
router.get("/questions", (req, res) => {
  const getQuestion = `SELECT * FROM questions;`
  // const getAnswers = `SELECT * FROM answers where id = $1;`
  pool
    .query(getQuestion)
    .then((result) => res.send(result.rows))
    .catch((error) => res.status(500).send(error));
});





router.post("/register", (req, res) => {
  console.log(req.body)
  const {firstName, lastName, email, password, city, country} = req.body;
  const teacherQuery = `INSERT INTO teachers(first_name, last_name, email, user_password, city, country) VALUES ($1, $2, $3, $4, $5, $6) RETURNING ID`;
  const regExpression = /^[a-zA-Z0-9 -]{1,30}$/;

  // if(!regExpression.exec(newRegFirstName)){
  // 	res.status(500).send(error)
  // } else{
    pool.query(teacherQuery, [firstName, lastName, email, password, city, country])
      .then((result) => res.status(201).json(result.rows[0]))
      .catch((error) => res.status(500).json(error));
 // }
  });

//--------------------------------------------------------
// //routes on login 
router.post("/login", (req, res) => {
  console.log(req.body);
  const newEmail = req.body.email;
  const newPassword = req.body.password;
  const teacherLoginQuery = `SELECT first_name, last_name, user_password FROM teachers WHERE email = '${newEmail}'`;
   const regExpression = /(@)(.+)$/;

  // res.send("message received");
   if(!regExpression.exec(newEmail)){
  	res.status(500).json({"message" : "Enter correct email/password"})
  } else{
    pool.query(teacherLoginQuery)
        .then((result) =>{
        res.status(200);
        const checkLogin = result.rows[0];
        if(checkLogin.password === newPassword){
         res.json({"message" : "UserName Valid"});
        }
         })
       
      
  }})
 


// router.post("/student", (req, res) => {
//   console.log(req.body)
//   res.send("message received");
// });
//  //Routes for module
// router.get("/module", function (req, res) {
//   console.log(req.body);
//   res.send("message received");
  
// });

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
