// import { Router } from "express";
// import pool from "./db";

const { Router } = require("express");
const { pool } = require("./db");
const router = new Router();
const bcrypt = require("bcrypt");




// create dynamic users global context

//================================================READ================================================



router.get("/teachers", (_, res) => {
  const getTeachers = `SELECT * FROM teachers`;
  console.log("teachers")
  pool
    .query(getTeachers)
    // .then(result => res.json(result))
    .then((data) => res.send(data.rows))
    .catch((error) => res.send(error));
});

router.get("/students", (_, res) => {
  const getStudents = `SELECT * FROM students`;
  console.log("students");
  pool
    .query(getStudents)
    // .then(result => res.json(result))
    .then((data) => res.send(data.rows))
    .catch((error) => res.send(error));
});
//----------------------Question route----------------------------
// router.get("/questions", (_, res) => {
//   const getQuestions = `SELECT question FROM questions LIMIT 5`;
//   pool
//     .query(getQuestions)
//     // .then(result => res.json(result))
//     .then((data) => res.send(data.rows))
//     .catch((error) => res.send(error));
// });

//-----------------register route-----------------------------------
router.post("/register-teacher", async (req, res) => {
  console.log(req.body);
  const regExpression = /^[a-zA-Z0-9 -]{1,60}$/;
  const { firstName, lastName, email, city, country } = req.body;
  const teacherQuery = `INSERT INTO teachers(first_name, last_name, email, user_password, city, country) VALUES ($1, $2, $3, $4, $5, $6) RETURNING ID`;
  try {
    const password = await bcrypt.hash(req.body.password, 10);
    if (!regExpression.exec(firstName) && !regExpression.exec(lastName)) {
      res.status(500).send({ message: "Fill in correct field" });
    } else {
      pool
        .query(teacherQuery, [
          firstName,
          lastName,
          email,
          password,
          city,
          country,
        ])
        .then((result) => res.status(201).json({ message: "Account created" }));
    }
  } catch {
    (e) => console.error(e);
  }
});

//--------------------------------------------------------
// //routes on login
router.post("/login", (req, res) => {
  console.log(req.body);
  const newEmail = req.body.email;
  const newPassword = req.body.password;
  const teacherLoginQuery = `SELECT first_name, last_name, user_password FROM teachers WHERE email = '${newEmail}'`;

  pool.query(teacherLoginQuery).then((result) => {
    res.status(200);
    // console.log(result.rows);
    const checkLogin = result.rows[0];
    if (checkLogin === undefined) {
      return res.status(400).json({ message: "cannot find user" });
    }
    const hashed = checkLogin["user_password"];
    // const userFirstName = checkLogin["first_name"];
    // const userLastName = loginResult["last_name"];
    const isValid = bcrypt.compareSync(newPassword, hashed);
    console.log(isValid);

    if (isValid) {
      res.status(200)
        .json({ message: "Login Sucessful" })
        // .catch((e) => console.error(e));
      } else {
      res
        .status(401)
        .json({ message: "wrong password" })
        // .catch((e) => console.error(e));
    }
  });
});

//-------------------------StudentRegistrations-----------------------------
// router.post("/register/students", async (req, res) => {
//   console.log(req.body);
//   const regExpression = /^[a-zA-Z0-9 -]{1,60}$/;
//   const { firstName, lastName, email, city, country } = req.body;
//   const teacherQuery = `INSERT INTO teachers(first_name, last_name, email, user_password, city, country) VALUES ($1, $2, $3, $4, $5, $6) RETURNING ID`;
//   try {
//     const password = await bcrypt.hash(req.body.password, 10);
//     if (!regExpression.exec(firstName) && !regExpression.exec(lastName)) {
//       res.status(500).send({ message: "Fill in correct field" });
//     } else {
//       pool
//         .query(teacherQuery, [
//           firstName,
//           lastName,
//           email,
//           password,
//           city,
//           country,
//         ])
//         .then((result) => res.status(201).json({ message: "Account created" }));
//     }
//   } catch {
//     (e) => console.error(e);
//   }
// });


//---------------------QUIZ DETAILS ROUTE-----------------------------

const catMap = { 25: "JavaScript", 12: "React", 22: "SQL" };

router.post("/quizDetails", (req, res) => {
  const getLesson = catMap[req.body.module];
  console.log(getLesson);
  const displayQuizzes = `SELECT quiz_description, question, answers.question_id, answer, module_name
FROM quizzes 
INNER JOIN modules ON modules.id = quizzes.module_id
INNER JOIN questions ON quizzes.id = questions.quiz_id
INNER JOIN answers ON questions.id = answers.question_id 
WHERE module_name = '${getLesson}'`;
  pool
    .query(displayQuizzes)
    // .then(result => res.json(result))
    .then((result) => {
      const groupToResult = []
      const results = result.rows;
      let i, j, temporary, chunk = 4;
      for (i = 0, j = results.length; i < j; i += chunk) {
        temporary = results.slice(i, i + chunk);
        console.log(temporary);
        let tempObj = {
          category: getLesson,
          correct_answer: temporary[0].answer,
          difficulty : "medium",
          incorrect_answers: [],
          question : temporary[0].question,
          question_id : temporary[0].question_id,
          type: "multiple"
        };
        for ( let k = 1; k < temporary.length; k++) {
          tempObj.incorrect_answers.push(temporary[k].answer)
        }
        groupToResult.push(tempObj);
      }
      // console.log(groupToResult);
      res.status(200).send(groupToResult);
    })
    .catch((error) => res.send(error));
});

//----------------------------post answer route-------------------

// `select student_answer, correct_answer from questions
// inner join student_quiz_answers on questions.id = student_quiz_answers.question_id;`;
router.post("/answer", (req, res) => {
  console.log("answer");
  res.status(200).json(req.body);

});


//--------------------------module route -------------------------------
router.get("/modules", (req, res) => {
  console.log("modules");
  const getModules = `SELECT * FROM modules`;

  // if(getModules === 'React'){
  //   res.send(result.rows[0])
  // }
  pool
    .query(getModules)
    .then((result) => {
      const rows = result.rows;
      res.json(rows);
    })
    .catch((error) => res.status(500).send(error));
});
//-------------------------------------------quiz question and answer-----------------
router.get("/questions", (req, res) => {
  console.log("questions")
  const getQuestion = `SELECT * FROM questions;`;
  // const getAnswers = `SELECT * FROM answers where id = $1;`
  pool
    .query(getQuestion)
    .then((result) => res.send(result.rows))
    .catch((error) => res.status(500).send(error));
});

//--------------------------------------QUIZ_DATA_PER_STUDENT--------------------------------------
//Summative result of quiz data

// router.get("/student/:id/quizzes", function (req, res) {
//   const studentId = req.params.id;

//   pool
//     .query(
//       `SELECT qz.id, qz.title FROM student_quiz_answers as sqa inner join
// questions as q on q.id = sqa.question_id inner join
// quizzes as qz on q.quiz_id = qz.id 
// where student_id = $1 group by qz.id;`,
//       [studentId]
//     )
//     .then((data) => {
//       // res.send(data);
//       let quizzes = [];
//       let promises = [];
//       data.rows.forEach((row) => {
//         promises.push(
//           pool
//             .query(
//               ` SELECT q.id As quiz_id,
//                 q.title,
//                 q.date_added,
            
//                 SUM(CASE WHEN sqa.is_correct THEN 1 ELSE 0 END) AS correct_count,
//                 ((SUM(CASE WHEN sqa.is_correct THEN 1 ELSE 0 END)*100/COUNT(sqa.id))) As result_percentage,
//                 (CASE WHEN ((SUM(CASE WHEN sqa.is_correct THEN 1 ELSE 0 END)*100/COUNT(sqa.id)))> q.percentage_pass_rate THEN 1 ELSE 0 END ) 
// 				As Has_passed,
//                 q.percentage_pass_rate,
//                 (SELECT COUNT(*)FROM questions WHERE quiz_id=q.id)As number_of_questions,
//                 (CASE WHEN COUNT(sqa.id)=(SELECT COUNT(*)FROM questions WHERE quiz_id=q.id) THEN 1 ELSE 0 END) AS completed_quiz
//        FROM quizzes As q
// 	   INNER JOIN questions AS qs ON q.id = qs.quiz_id
//           inner JOIN student_quiz_answers AS sqa ON qs.id = sqa.question_id
            
//             WHERE sqa.student_id =$1 AND q.id = $2 group by q.id;`,
//               [studentId, row.id]
//             )
//             .then((quiz) => {
//               quizzes.push(quiz.rows[0]);
//             })
//         );
//       });
//       Promise.all(promises).then(() => res.send(quizzes));
//       // res.send(quizzes)
//     })
//     .catch((error) => res.send(error));
// });
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
});

//-----------------------------------------GROUPS_BY_TEACHER-----------------------------------------

router.get("/teacher/:id", function (req, res) {
  const groupId = req.params.id;
  pool
    .query(
      `SELECT z.id, 
              z.title, 
              z.percentage_pass_rate, 
              COUNT(qs.id) AS quiz_question_count
       FROM quizzes AS z 
       INNER JOIN questions AS qs ON z.id = qs.quiz_id
       GROUP BY z.id, 
                z.title, 
                z.percentage_pass_rate
       ORDER BY z.id;`
    )
    .then((data) => {
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
            quiz_information: data.rows,
            group_results: data2.rows,
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

//Output:This inserts the student quiz answers into the database table student_quiz_answers
router.post("/quiz-submission/", (req, res) => {
  const { question_id, student_id, student_answer, is_correct } = req.body;
  const updateQuery = `
    UPDATE student_quiz_answers
    SET
    student_answer = $1,
    is_correct = $2
    WHERE
    question_id = $3 AND
    student_id = $4
  `;
  const insertQuery = `
  INSERT
  INTO student_quiz_answers
  (question_id, student_id,student_answer,is_correct)
  VALUES($1,$2,$3,$4)
  `;
  pool
    .query(updateQuery, [student_answer, is_correct, question_id, student_id])
    .then((result) => {
      if (result.rowCount === 0) {
        pool
          .query(insertQuery, [
            question_id,
            student_id,
            student_answer,
            is_correct,
          ])
          .then((_) => {
            res.send({
              result: `SUCCESS`,
              message: `Answer inserted`,
            });
          });
      } else {
        res.send({
          result: `SUCCESS`,
          message: `Answer updated`,
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

router.post("/student-register", async (req, res) => {
  console.log(req.body)
    const { firstName, lastName, email, groupsId, city, country } =req.body;
     const regExpression = /^[a-zA-Z0-9 -]{1,60}$/;
  const studentsQuery = `INSERT INTO students(first_name, last_name, email, user_password,groups_id, city, country) VALUES ($1, $2, $3, $4, $5, $6,$7) returning id`;

 try {
    const password = await bcrypt.hash(req.body.password, 10);
    if (!regExpression.exec(firstName) && !regExpression.exec(lastName)) {
      res.status(500).send({ message: "Fill in correct field" });
    } else {
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
        .then((result) =>res.status(201).json({ message: "Account created" }));
      }
  } catch {
    (e) => console.error(e);
  }

});

router.post("/student-login", (req, res) => {
  console.log(req.body);
  const newEmail = req.body.email;
  const newPassword = req.body.password;
  const studentLoginQuery = `SELECT id, first_name, last_name, user_password, groups_id FROM students WHERE email = '${newEmail}'`;
console.log(studentLoginQuery)
  pool.query(studentLoginQuery).then((result) => {
    res.status(200);
    console.log(result.rows);
    const checkLogin = result.rows[0];
    if (checkLogin === undefined) {
      return res.status(400).json({ message: "cannot find user" });
    }
    const hashed = checkLogin["user_password"];
    // const userFirstName = checkLogin["first_name"];
    // const userLastName = loginResult["last_name"];
    const isValid = bcrypt.compareSync(newPassword, hashed);
    console.log(isValid);

    if (isValid) {
      res.status(200).json({
        message: "Login Sucessful",
        userId: checkLogin["id"],
        firstName: checkLogin["first_name"],
        lastName: checkLogin["last_name"]
      });
      // .catch((e) => console.error(e));
    } else {
      res.status(401).json({ message: "wrong password" });
      // .catch((e) => console.error(e));
    }
  });
});
// DO NOT REMOVE THIS endpoint belongs to the student register endpoint
router.get("/groups", (_, res) => {
  const sql = `SELECT * FROM groups`;
  pool
    .query(sql)
    .then((data) => res.send(data.rows))
    .catch((error) => res.send(error));
});

router.post("/set-quiz", (req, res) => {
  const newQuizTitle = req.body.title;
  const newQuizDescription = req.body.description;
  const newModuleId = parseInt(req.body.moduleId);
  const newTeacherId = parseInt(req.body.teacherId); 
  const quizQuery = `insert into quizzes (title, quiz_description, image_url, teacher_id, module_id) 
  values ($1, $2, 'www...testing', $3, $4 ) returning id;`;
  const questionQuery = ` insert into questions(question, quiz_id, correct_answer) 
  values ($1, $2, $3) returning id;`;
  const answerQuery = `insert into answers (question_id, answer) values ($1, $2);`;

  pool
    .query(quizQuery, [newQuizTitle, newQuizDescription, newTeacherId, newModuleId])
    .then((data) => {console.log(data) 
      const quizId = data.rows[0].id
      const questionArray = Object.keys(req.body).filter((item)=> item.includes("question"))
      for(let question of questionArray){
        const questionObject = req.body[question]
        pool.query(questionQuery, [questionObject.question, quizId, questionObject.correct_answer])
        .then((data)=>{
          const questionId = data.rows[0].id;
          for(let i = 0; i < 4; i++){
            pool.query(answerQuery, [questionId, questionObject.answers[i]]);
          }
           res.sendStatus(200)});
     }
    })
    .catch((error) => res.send(error));

    });

// router.get("/", (_, res) => {
//   res.json({ message: "Hello, world!" });
// });

// export default router;
module.exports = router;
