import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";

const StudentDashBoard = () => {
  const [quizInfo, setQuizInfo] = useState([]);
  console.log(quizInfo,"bye");
  useEffect(() => {
    fetch("http://localhost:3100/api/dashboard/student/1")
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
      .catch((e) => console.log(e));
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Group name</th>
          <th>Teacher First Name</th>
          <th>Teacher Last Name</th>
          <th>Quiz title </th>
          <th>Date added</th>
          <th>Sum </th>
          <th>Count </th>
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
        {console.log(typeof quizInfo, "quizInfo")}
        {/* {console.log("quizzes", quizInfo)} */}
        <tr>
          <td>{quizInfo.id}</td>
          <td>{quizInfo.first_name}</td>
          <td>{quizInfo.last_name}</td>
          <td>{quizInfo.group_name}</td>
          {/* <td>{quizInfo.quizzes[0]}</td> */}
          <td>{quizInfo.last_name}</td>
          <td>{quizInfo.title}</td>
          <td>{quizInfo.date_added}</td>
          <td>{quizInfo.sum}</td>
          <td>{quizInfo.count}</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan="2">Larry the Bird</td>
          <td>@twitter</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
};

export default StudentDashBoard;
