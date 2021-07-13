import { object } from "prop-types";
import React, { useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import "./TeacherQuiz.css"

const TeacherQuiz = () => {
  const [module, setModule] = useState("2");
  const [form, setForm] = useState({});

  const { user } = useContext(AuthContext);
  console.log(user);

  const submitHandler = (e) => {
    e.preventDefault();
    let formattedForm = {}
    for(let i = 1; i <= 10; i++ ){
      if (Object.keys(form).includes(`question${i}_question`)){ 
        formattedForm[`question${i}`] = {
          question: form[`question${i}_question`],
          answers: [
            form[`question${i}_answer1`],
            form[`question${i}_answer2`],
            form[`question${i}_answer3`],
            form[`question${i}_answer4`],
          ],
          correct_answer: form[`question${i}_answer${form[`question${i}_correctAnswer`]}`],
        };
      }
    }
console.log(formattedForm);
    fetch("/api/set-quiz", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formattedForm, moduleId: module, teacherId :1, title: form.title,
          description: form.description
        }),
      }). then((data)=>{
        console.log(data)
      })
    }

  const handleChange = (e)=>{
    setForm({...form, [e.target.name]: e.target.value})
    console.log(form)
  }

  console.log(Object.keys(form))

  return (
    <div className="teacher-quiz">
      <h3>SET THE QUIZ</h3>
      <h4>Please Select Module</h4>
      <form onSubmit={submitHandler}>
        <label>
          <h4>Select Module</h4>
          <select
            className="teacher-dropdown"
            name="module"
            onChange={(e) => setModule(e.target.value)}
            value={module}
          >
            <option value="2">JavaScript</option>
            <option value="1">REACT</option>
            <option value="3">SQL</option>
          </select>
        </label>

        <input
          className="teacher-input"
          placeholder="title"
          type="text"
          name="title"
          onChange={handleChange}
        ></input>

        <input
          className="teacher-input"
          placeholder="description"
          type="text"
          name="description"
          onChange={handleChange}
        ></input>

        <h2>Set Questions</h2>
        {[...Array(10)].map((element, index) => {
          return (
            <div key={index}>
              <input
                className="teacher-input"
                type="text"
                placeholder="question"
                name={`question${index + 1}_question`}
                onChange={handleChange}
              ></input>

              <input
                className="teacher-input"
                type="text"
                placeholder="answer1"
                name={`question${index + 1}_answer1`}
                onChange={handleChange}
              ></input>

              <input
                className="teacher-input"
                type="text"
                placeholder="answer2"
                name={`question${index + 1}_answer2`}
                onChange={handleChange}
              ></input>

              <input
                className="teacher-input"
                type="text"
                placeholder="answer3"
                name={`question${index + 1}_answer3`}
                onChange={handleChange}
              ></input>

              <input
                className="teacher-input"
                type="text"
                placeholder="answer4"
                name={`question${index + 1}_answer4`}
                onChange={handleChange}
              ></input>

              <select
                className="teacher-dropdown"
                name={`question${index + 1}_correctAnswer`}
                onChange={handleChange}
              >
                <option value="">Select correct answer</option>
                <option value="1">Answer 1</option>
                <option value="2">Answer 2</option>
                <option value="3">Answer 3</option>
                <option value="4">Answer 4</option>
              </select>
            </div>
          );
        })}
        <br></br>
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
};

export default TeacherQuiz;
