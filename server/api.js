import { Router } from "express";
import  pool  from "./db";
const router = new Router();


router.get("/", (_, res) => {
	res.json({ message: "Hello, world!" });
});

router.post("/login/student", function (req, res) {
  const {email, password} = req.body
  pool
    .query("SELECT * FROM student WHERE email=$1 AND password=$2", [email, password])
    .then((result) => {
      if (result.rowCount > 0) {
        return res.status(200).send({
          result: `SUCCESS`,
          message: `User exists !`,
        });
      } else {
        return res.status(400).send({
          result: `ERROR`,
          message: `User doesn't exist !`,
        })
      }
    })

      
});
router.get("/quizzes", (_, res) => {
  const sql = `SELECT * FROM quizzes`;
  pool.query(sql)
    // .then(result => res.json(result))
    .then(data => res.send(data.rows))
    .catch(error => res.send(error));
});
export default router;
