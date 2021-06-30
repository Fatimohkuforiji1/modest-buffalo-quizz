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

router.post("/register", (req, res) => {
  console.log(req.body)
  const newRegFirstName = req.body.firstName;
  const newRegLastName = req.body.lastName;
  const newRegEmail= req.body.email;
  const newRegPassword = req.body.password;
  const newCity = req.body.city;
  const newCountry = req.body.country;
  const teacherQuery = `INSERT INTO teachers(first_name, last_name, email, user_password, city, country) VALUES ($1, $2, $3, $4, $5, $6) RETURNING ID`;
  const regExpression = /^[a-zA-Z0-9 -]{1,30}$/;

  // if(!regExpression.exec(newRegFirstName)){
  // 	res.status(500).send(error)
  // } else{
    pool.query(teacherQuery, [newRegFirstName, newRegLastName, newRegEmail, newRegPassword, newCity, newCountry])
      .then((result) => res.status(201).json(result.rows[0]))
      .catch((error) => res.status(500).json(error));
 // }
  });


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
       
      //   if (error){
      //     res.send(400).json("UserName not found")
      //   }
      //   if (result.length > 0){
      //     res.send(result);
      //   }else { 
      //     res.send({Message: "Wrong combination"})
      //   }
      // }
  }})
  //   // .then((result) => {
  //     if (result.length > 0) {
  //       res.status(201).json(result)
  //     } else {
  //    res.send(500).json("Wrong username/password combination");
  // }})
  



//  //Routes for teacher
// router.get("/teacher", function (req, res) {
//   console.log(req.body);
//   res.send("message received");
  
// });

// router.post("/teacher", (req, res) => {
//   console.log(req.body)
//   res.send("message received");
// });


//  //Routes for student
// router.get("/student", function (req, res) {
//   console.log(req.body);
//   res.send("message received");
  
// });

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



router.get("/group/:id", function (req, res) {
  const groupId = req.params.id;

  pool
    .query(
      `SELECT z.id, z.title, z.percentage_pass_rate, COUNT(qs.id) AS quiz_question_count
        FROM quizzes AS z 
        INNER JOIN questions AS qs ON z.id = qs.quiz_id
        GROUP BY z.id, z.title, z.percentage_pass_rate
        ORDER BY z.id;

      SELECT q.id, g.group_name, s.id,
        COUNT(qa.id) AS Answered_count,
        SUM(CASE WHEN qa.is_correct THEN 1 ELSE 0 END) AS correct_count
      FROM students As s
      INNER JOIN groups As g ON s.groups_id = g.id              
      LEFT JOIN student_quiz_answers AS qa ON s.id = qa.student_id
      INNER JOIN questions AS qs ON qa.question_id = qs.id
      INNER JOIN quizzes AS q ON qs.quiz_id = q.id
      WHERE g.id =$1
      GROUP BY q.id, g.group_name, s.id
`,
      [groupId]
    )
    .then((data) => res.send(data.rows))
    .catch((error) => res.send(error));
});


// router.get("/group/:id", function (req, res) {
//   const groupId = req.params.id;
 
//   pool
//     .query(
//       `SELECT AVG(sum(CASE WHEN qa.is_correct THEN 1 ELSE 0 END) AS "total_questions_correct")
//                       FROM groups As g
//                       INNER JOIN students As s ON s.groups_id=g.id
//                       INNER JOIN student_quiz_answers AS qa ON qa.student_id=s.id
//                       INNER JOIN questions AS qs ON qs.id = qa.question_id
//                       INNER JOIN quizzes AS z ON qs.quiz_id = z.id
                      
//             WHERE g.id =$1
//             GROUP BY 
//     `,
//       [groupId]
//     )
//     .then((data) => res.send(data.rows))
//     .catch((error) => res.send(error));
// });

// west midlands 3 average pass rate?  + how many took the test? select students one by one
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
// router.get("/dashboard/students", (req, res) => {
//   const { firstName, lastName, email, password, city, country } = req.body;
//   const studentsQuery = `INSERT INTO students(first_name, last_name, email, user_password, city, country) VALUES ($1, $2, $3, $4, $5, $6) returning id`;
//   pool
//     .query(studentsQuery, [firstName, lastName, email, password, city, country])
//     .then((result) => {
//       if (result.rowCount > 0) {
//         res.status(201).send({
//           result: `SUCCESS`,
//           message: `A new post has been created in the database`,
//         });
//       }
//     })
//     // .catch((error) => res.status(500).json(error));
//     .catch((e) => {
//       console.error(e.stack);
//       res.status(500).send({
//         result: `FAILURE`,
//         message: `FATAL ERROR: Internal Server Error`,
//       });
//     });
// });

export default router;
