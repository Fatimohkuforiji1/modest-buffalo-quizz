import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
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
  if (
    groupQuizInfo &&
    groupQuizInfo.quiz_information &&
    groupQuizInfo.group_results
  ) {
    for (let index = 0; index < groupQuizInfo.group_results.length; index++) {
      const studentInfo = groupQuizInfo.group_results[index];
      const quiz = groupQuizInfo.quiz_information.filter(
        (qi) => qi.id === studentInfo.quiz_id
      )[0];
      const quizDate = new Date(quiz.date_added);

      let passed_value = "PASSED";
      if (studentInfo.has_passed === 0) {
        passed_value = "FAILED";
      }

      table_rows.push(
        <tr key={index}>
          <td>{studentInfo.group_name}</td>
          <td>{`${studentInfo.student_first_name} ${studentInfo.student_last_name}`}</td>
          <td>{quiz.title}</td>
          <td>{quizDate.toDateString()}</td>
          <td>{studentInfo.result_percentage}%</td>
          <td>{studentInfo.percentage_pass_rate}%</td>
          <td>{passed_value}</td>

          {/* <td></td> */}
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
          <th>Module Name</th>
          <th>Date added</th>
          <th>Result percentage</th>
          <th>Percentage pass</th>
          <th>Has passed</th>
        </tr>
      </thead>
      <tbody>{table_rows}</tbody>
    </Table>
  );
};
export default TeacherDashboard;

// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Table } from "react-bootstrap";
// //name routes for specific functions
// ///dashboard/teacher/:id
// const TeacherDashboard = () => {
//   const [groupQuizInfo, setGroupQuizInfo] = useState({group_result: [], group_information: []});

//   // console.log(groupQuizInfo);
//   useEffect(() => {
//     fetch(`/api/teacher/1`)
//       .then((response) => {
//         if (response.status === 200) {
//           return response.json();
//         } else {
//           throw new Error("There is an error with the service");
//         }
//       })
//       .then((data) => {
//         console.log(data)
//         setGroupQuizInfo(data);
//         // console.log(setGroupQuizInfo(data));
//         console.log(groupQuizInfo);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }, []);

//   const table_rows = [];
//   if (groupQuizInfo && groupQuizInfo.quiz_information) {
//     for (let index = 0; index < groupQuizInfo.quiz_information.length; index++) {
//       const quiz = groupQuizInfo.quiz_information[index];
//       table_rows.push(
//         <tr key={index}>
//           <td>{groupQuizInfo.group_name}</td>
//           <td>{`${quiz.student_first_name} ${quiz.student_last_name}`}</td>
//           <td>{quiz.module_name}</td>
//           <td>{quiz.title}</td>
//           <td>{quiz.date_added}</td>
//           <td>{quiz.result_percentage}</td>
//           <td>{quiz.percentage_pass_rate}</td>
//           <td>{`${groupQuizInfo.first_name} ${groupQuizInfo.last_name}`}</td>
//           <td>{quiz.total_questions_correct}</td>
//           <td>{quiz.total_questions_answered}</td>
//           <td>{groupQuizInfo.id}</td>
//           {/* <td></td>
//           <td></td>
//           <td></td> */}
//         </tr>
//       );
//     }
//   }

//   return (
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>Group Name</th>
//           <th>Student full name</th>
//           <th>Module Name</th>
//           <th>Quiz title</th>
//           <th>Date added</th>
//           <th>Result percentage</th>
//           <th>Percentage pass</th>
//           <th>Has passed</th>
//           <th>Completed quiz</th>
//         </tr>
//       </thead>
//       <tbody>{table_rows}</tbody>
//     </Table>
//   );
// };
// export default TeacherDashboard;
