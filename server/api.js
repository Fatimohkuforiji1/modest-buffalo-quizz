import { Router } from "express";
import pool from "./db";
const router = new Router();
// create dynamic users global context 

//================================================READ================================================

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
 

//--------------------------------------QUIZ_DATA_PER_STUDENT--------------------------------------
//Summative result of quiz data 

router.get("/student/:id/quizzes", function (req, res) {
  const studentId = req.params.id;
  
  pool
    .query(
      ` SELECT q.id As quiz_id, 
              q.title, 
              q.date_added, 
              g.group_name, 
              s.id As student_id,
              s.first_name As student_first_name, 
              s.last_name As student_last_name,
              COUNT(qa.id) AS Answered_count,
              SUM(CASE WHEN qa.is_correct THEN 1 ELSE 0 END) AS correct_count,
              ((SUM(CASE WHEN qa.is_correct THEN 1 ELSE 0 END)*100/COUNT(qa.id))) As result_percentage,
              (CASE WHEN ((SUM(CASE WHEN qa.is_correct THEN 1 ELSE 0 END)*100/COUNT(qa.id)))> q.percentage_pass_rate THEN 1 ELSE 0 END ) As Has_passed, 
              q.percentage_pass_rate,
              (SELECT COUNT(*)FROM questions WHERE quiz_id=q.id)As number_of_questions,
              (CASE WHEN COUNT(qa.id)=(SELECT COUNT(*)FROM questions WHERE quiz_id=q.id) THEN 1 ELSE 0 END) AS completed_quiz
     FROM students As s
          INNER JOIN groups As g ON s.groups_id = g.id              
          LEFT JOIN student_quiz_answers AS qa ON s.id = qa.student_id
          INNER JOIN questions AS qs ON qa.question_id = qs.id
          INNER JOIN quizzes AS q ON qs.quiz_id = q.id
          WHERE s.id =$1
      GROUP BY q.id, g.group_name, s.id; `,
      [studentId]
    )
    .then((data) => {
      res.send(data.rows);
    })
    .catch((error) => res.send(error));
})

//-----------------------------------------GROUPS_BY_TEACHER-----------------------------------------

router.get("/teacher/:id", function (req, res) {
  const groupId = req.params.id;
  pool
    .query(
      `SELECT z.id, 
              z.title,
              z.quiz_description, 
              z.percentage_pass_rate,
              z.date_added,
              COUNT(qs.id) AS quiz_question_count
       FROM quizzes AS z 
       INNER JOIN questions AS qs ON z.id = qs.quiz_id
       GROUP BY z.id, 
                z.title, 
                z.percentage_pass_rate
       ORDER BY z.id;`
    )
    .then(data => {
      pool
        .query(
     `SELECT q.id As quiz_id, 
            g.group_name,
            s.id As student_id,
            s.first_name As student_first_name,
            s.last_name As student_last_name,
            COUNT(qa.id) AS Answered_count,
            SUM(CASE WHEN qa.is_correct THEN 1 ELSE 0 END) AS correct_count,
            ((SUM(CASE WHEN qa.is_correct THEN 1 ELSE 0 END)*100/COUNT(qa.id))) As result_percentage,
            (CASE WHEN ((SUM(CASE WHEN qa.is_correct THEN 1 ELSE 0 END)*100/COUNT(qa.id)))> q.percentage_pass_rate THEN 1 ELSE 0 END ) As Has_passed, 
            q.percentage_pass_rate,
            (SELECT COUNT(*)FROM questions WHERE quiz_id=q.id)As number_of_questions,
            (CASE WHEN COUNT(qa.id)=(SELECT COUNT(*)FROM questions WHERE quiz_id=q.id) THEN 1 ELSE 0 END) AS completed_quiz
     FROM students As s
            INNER JOIN groups As g ON s.groups_id = g.id              
            LEFT JOIN student_quiz_answers AS qa ON s.id = qa.student_id
            INNER JOIN questions AS qs ON qa.question_id = qs.id
            INNER JOIN quizzes AS q ON qs.quiz_id = q.id
      WHERE g.id =$1
      GROUP BY q.id, g.group_name, s.id;`,
          [groupId]
        )
        .then((data2) => {
          const dataAll = {
            "quiz_information": data.rows,
            "group_results": data2.rows,
          };
          res.send(dataAll);
        });
    })
    .catch((error) => res.send(error));
});


//---------------------------------------------STUDENT_DATA_FOR_CLIENT_DASHBOARD---------------------------------------------
//DO NOT DELETE ENDPOINT 

router.get("/dashboard/student/:id", function (req, res) {
  const studentId = req.params.id;

  pool
    .query(
      `SELECT s.id,s.first_name,
              s.last_name, g.group_name
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
      const query = `SELECT t.first_name As teacher_first_name, 
                            t.last_name As teacher_last_name, 
                            z.title,
                            m.module_name, 
                            z.date_added, 
                            sum(CASE WHEN r.is_correct THEN 1 ELSE 0 END) AS "total_questions_correct", 
                            count(r.id) AS "total_questions_answered"
                    FROM student_quiz_answers AS r
                      INNER JOIN questions AS q ON r.question_id = q.id
                      INNER JOIN quizzes AS z ON q.quiz_id = z.id
                      INNER JOIN teachers AS t ON z.teacher_id = t.id
                      INNER JOIN modules As m on m.id=z.module_id
                    WHERE r.student_id =$1
                    GROUP BY z.id, t.first_name, t.last_name, m.id
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



//=================================================CREATE=================================================

//---------------------------------------------LOGIN--------------------------------------------- 
router.post("/login", (req, res) => {
  console.log(req.body);
  const newEmail = req.body.email;
  const newPassword = req.body.password;
  const teacherLoginQuery = `SELECT first_name, last_name, user_password FROM teachers WHERE email = '${newEmail}'`;
  const regExpression = /(@)(.+)$/;

  if (!regExpression.exec(newEmail)) {
    res.status(500).json({ message: "Enter correct email/password" });
  } else {
    pool.query(teacherLoginQuery).then((result) => {
      res.status(200);
      const checkLogin = result.rows[0];
      if (checkLogin.password === newPassword) {
        res.json({ message: "UserName Valid" });
      }
    });
  }
});


//----------------------------------------TEACHER REGISTER---------------------------------------- 
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

//----------------------------------------STUDENT REGISTER---------------------------------------- 
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
    .catch((e) => {
      console.error(e.stack);
      res.status(500).send({
        result: `FAILURE`,
        message: `FATAL ERROR: Internal Server Error`,
      });
    });
});
// do not remove endpoint belongs to the student register endpoint 
router.get("/groups", (_, res) => {
  const sql = `SELECT * FROM groups`;
  pool
    .query(sql)
    .then((data) => res.send(data.rows))
    .catch((error) => res.send(error));
});


export default router;
