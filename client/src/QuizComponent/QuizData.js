import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";

const groupData = (data) => {
  
  let groupedData = [
    {
      quiz_description: data[0].quiz_description,
      question: data[0].question,
      answers: [data[0].answer],
      questionId: data[0].question_id,
      modules: data[0].module_name
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
        questionId: row.question_id,
        modules: row.module_name,
      };
    }
  }
  return groupedData;
};


const QuizData = () => {
  
  const {moduleType} = useParams();

  const [quizDetails, setQuizDetails] = useState([]);
  const [formValue, setFormValue] = useState([]);

const handleSubmit = (event)=>{
  fetch("http://localhost:3100/api/answer", {
    method: "POST",
    body: JSON.stringify(formValue),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((result) => result.json())
    .then((res) => { console.log(res);
    });
  
}


const updateFormValue =(questionId, answer)=>{
const index = formValue.findIndex((q) => q.questionId == questionId);
formValue[index].answer= answer
console.log(formValue)
setFormValue(formValue);
}

  useEffect(() => {
    fetch("http://localhost:3100/api/quizDetails", {
      method: "POST",
      body: JSON.stringify({ module: moduleType }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((data) => {
        setQuizDetails(groupData(data));
        const mappedValues = data
          .map((answer) => answer.question_id)
          .filter((value, index, _arr) => _arr.indexOf(value) == index);
        let formData = [];
        mappedValues.forEach((question) => {
          formData.push({
            questionId: question,
            answer: "",
          });
        });
        setFormValue(formData);
      });
      
    
  }, []);

  return quizDetails ? (

    
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <ul>
          {quizDetails.map((q, i) => {
            return (
              <li key={i}>
                 <i>{q.question}</i>
                <ol>
                  {q.answers.map((answer, index) => {
                    return (
                      <div key={index}>
                        <input
                          type="radio"
                          name={i + "_answers"}
                          value={answer}
                          onChange ={(event)=>{updateFormValue(
                            q.questionId,
                            event.target.value
                          ); }}
                        />
                        <label htmlFor={i + "_answers"}> {answer} </label>{" "}
                        <br />
                      </div>
                    );
                  })}
                </ol>
              </li>
            );
          })}
        </ul>

        <input type="submit" value = "Submit" onClick={handleSubmit}/>
      </form>
    </div>
  ) : (
    <div>"No Data"</div>
  );


  }
export default QuizData;

