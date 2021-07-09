import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";

const StudentDashBoard = () => {
  const [quizInfo, setQuizInfo] = useState([]);
  console.log(quizInfo, "bye");

  useEffect(() => {
    fetch(`http://localhost:3100/api/student/1/quizzes`) // hardcode until id is available (global context)
      .then((response) => {
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
      });
  }, []);
  console.log("QI", quizInfo);

  const table_rows = [];
  if (quizInfo) {
    for (let index = 0; index < quizInfo.length; index++) {
      const quiz = quizInfo[index];
      const quizDate = new Date(quiz.date_added);

      let passed_value = "PASSED";
      if (quiz.has_passed === 0) {
        passed_value = "FAILED";
      }

      table_rows.push(
        <tr key={index}>
          <td>{quiz.group_name}</td>
          <td>{quiz.title}</td>
          <td>{quizDate.toDateString()}</td>
          <td>{quiz.correct_count}</td>
          <td>{quiz.answered_count}</td>
          <td>{quiz.result_percentage}%</td>
          <td>{passed_value}</td>
        </tr>
      );
    }
  }

  return (
    <>
      {quizInfo && quizInfo.length > 0 && (
        <h2>
          {quizInfo[0].student_first_name} {quizInfo[0].student_last_name}'s
          Quizzes
        </h2>
      )}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Group Name</th>
            <th>Quiz Title </th>
            <th>Date Added</th>
            <th>Total Correct </th>
            <th>Total Answered </th>
            <th>Pass Rate</th>
            <th>Has Passed</th>
          </tr>
        </thead>
        <tbody>
          {console.log("quizzes", quizInfo)}
          {table_rows}
        </tbody>
      </Table>
    </>
  );
};

export default StudentDashBoard;
