import React, {useState, useEffect} from 'react'

const QuizData = () => {
const [quizDetails, setQuizDetails] = useState([]);

useEffect(() => {
  fetch("http://localhost:3100/api/quizDetails")
    .then((result) => result.json())
    .then((quizDetails) => {
      console.log(quizDetails);
      setQuizDetails(quizDetails);
    });
}, []);
    
  
    return (
        <div>
           {quizDetails.map((obj, index) => {
          return <li key={index}>
              {/* {obj.quiz_description} */}
              {obj.question}
              {obj.answer}
              </li>

               })};
               </div>
    )

  }

export default QuizData
