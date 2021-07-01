import React, { useState, useEffect } from "react";
const groupData = (data) => {
  
  let groupedData = [
    {
      quiz_description: data[0].quiz_description,
      question: data[0].question,
      answers: [data[0].answer],
    },
  ];
  
  for (let i = 1, j = 0; i < data.length; i++) {
    const row = data[i];
    if (
      groupedData[j].quiz_description === row.quiz_description &&
      groupedData[j].question === row.question
    ) {
      // same question
      groupedData[j].answers.push(row.answer);
    } else {
      // new question
      j = j + 1;
      groupedData[j] = {
        quiz_description: row.quiz_description,
        question: row.question,
        answers: [row.answer],
      };
    }
  }
  return groupedData;
};

const QuizData = () => {
  const [quizDetails, setQuizDetails] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3100/api/quizDetails")
      .then((result) => result.json())
      .then((data) => {
         setQuizDetails(groupData(data));;
       
      });
  }, []);
 console.log(quizDetails)


  return quizDetails ? (
    <div>
      <ul>
        {quizDetails.map((q, i) => {
          return (
            <li key={i}>
              <b>{q.quiz_description}:</b> <i>{q.question}</i>
              <ol>
                {q.answers.map((answer, index) => {
                  return (
                    <div key={index}>
                      <input type="radio" name="answer" value="answers" />
                      <label for="answers"> {answer} </label> <br />
                    </div>
                  );
                })}
              </ol>
            </li>
          );
        })}
      </ul>
      <button> Submit</button>
    </div>
  ) : (
    <div>"No Data"</div>
  );


  }
export default QuizData;

// client / src / QuizComponent / QuizData.js;
// modified: client / src / Start.css;
// modified: server / api.js;