import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
//name routes for specific functions
///dashboard/teacher/:id
const TeacherDashboard = () => {
  const [groupQuizInfo, setGroupQuizInfo] = useState([]);
  console.log(groupQuizInfo);
  useEffect(() => {
    fetch(`http://localhost:3100/api/teacher/1`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("There is an error with the service");
        }
      })
      .then((data) => {
        setGroupQuizInfo(data);
        console.log(setGroupQuizInfo(data));
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  
  const table_rows = [];
  if (groupQuizInfo && groupQuizInfo.quizzes) {
    for (let index = 0; index < groupQuizInfo.quizzes.length; index++) {
      const quiz = groupQuizInfo.quizzes[index];
      table_rows.push(
        <tr key={index}>
          <td>{groupQuizInfo.id}</td>
          <td>{`${groupQuizInfo.first_name} ${groupQuizInfo.last_name}`}</td>
          <td>{groupQuizInfo.group_name}</td>
          <td>{`${quiz.teacher_first_name} ${quiz.teacher_last_name}`}</td>
          <td>{quiz.title}</td>
          <td>{quiz.module_name}</td>
          <td>{quiz.date_added}</td>
          <td>{quiz.total_questions_correct}</td>
          <td>{quiz.total_questions_answered}</td>
        </tr>
      );
    }
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Group Name</th>
          <th>Student full name</th>
          <th>Quiz title </th>
          <th>Teacher Name</th>
          <th>Quiz title </th>
          <th>Module</th>
          <th>Date added</th>
          <th>Total Correct </th>
          <th>Total Answered </th>
        </tr>
      </thead>
      <tbody>{table_rows}</tbody>
    </Table>
  );
};
export default TeacherDashboard;
