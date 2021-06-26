import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";

const StudentDashBoard = () => {
  const [quizInfo, setQuizInfo] = useState([]);
  console.log(quizInfo, "bye");
  
  useEffect(() => {
    fetch(`http://localhost:3100/api/dashboard/student/2`)
      .then((response) => {
        //  console.log(response, "response from use effect")
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("There is an error with the service");
        }
      })
      .then((data) => {
        setQuizInfo(data);
      })
      .catch((e) => {
        console.log(e);
        //return <h2>Error Encountered</h2>
      });
  }, []);
   console.log("QI",quizInfo)

  //code stolen from https://flaviocopes.com/react-how-to-loop/ (brent)
  const table_rows = [];
  if(quizInfo && quizInfo.quizzes) {
    for (let index = 0; index < quizInfo.quizzes.length; index++) {
      const quiz = quizInfo.quizzes[index];
      table_rows.push(
        <tr key={index}>
          <td>{quizInfo.id}</td>
          <td>
            {`${quizInfo.first_name} ${quizInfo.last_name}`}
          </td>
          <td>{quizInfo.group_name}</td>
          <td>{quiz.first_name}</td>
          <td>{quiz.last_name}</td>
          <td>{quiz.title}</td>
          <td>{quiz.module_name}</td>
          <td>{quiz.date_added}</td>
          <td>{quiz.total_questions_correct}</td>
          <td>{quiz.total_questions_answered}</td>
        </tr>
      );
    }
  }
  
  /*

  if(x > 0) {
    return 1;
  } else {
    return 2;
  }

  //ternary equivalent
  return x > 0 ? 1 : 2;
  */

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Student Name</th>
          <th>Group name</th>
          <th>Teacher First Name</th>
          <th>Teacher Last Name</th>
          <th>Quiz title </th>
          <th>Module</th>
          <th>Date added</th>
          <th>Total Correct </th>
          <th>Total Answered </th>
        </tr>
      </thead>
      <tbody>
        {/* {console.log(Array.isArray(quizInfo))}
         {quizInfo.length <= 0 ? 
        <td>Loading.... </td>
        :     quizInfo.map((info,index) => {
          <tr key={index}>
          <td></td>
          </tr>
        })
      } */}
        {/* {console.log(typeof quizInfo, "quizInfo")} */}
        {console.log("quizzes", quizInfo)}
        {table_rows}
        {/* //this is what we had when we started */}
        {/* <tr>
          <td>{quizInfo.id}</td>
          <td>{quizInfo.first_name}</td>
          <td>{quizInfo.last_name}</td>
          <td>{quizInfo.group_name}</td>
          { <td>{quizInfo.quizzes[0]}</td> }
          <td>{quizInfo.last_name}</td>
          <td>{quizInfo.title}</td>
          <td>{quizInfo.date_added}</td>
          <td>{quizInfo.sum}</td>
          <td>{quizInfo.count}</td>
        </tr> */}
        {/* <tr>
          <td>3</td>
          <td colSpan="2">Larry the Bird</td>
          <td>@twitter</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr> */}
      </tbody>
    </Table>
  );
};

export default StudentDashBoard;
