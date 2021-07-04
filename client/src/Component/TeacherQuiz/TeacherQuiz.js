import React, { useState } from "react";
const TeacherQuiz = () => {
  const [module, setModule] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [wrongAnswer, setWrongAnswer] = useState("");
  const [question1, setQuestion1] = useState();
  const [question2, setQuestion2] = useState();
  const [question3, setQuestion3] = useState();
  const [question4, setQuestion4] = useState();
  const [question5, setQuestion5] = useState();
  const [question6, setQuestion6] = useState();
  const [question7, setQuestion7] = useState();
  const [question8, setQuestion8] = useState();
  const [question9, setQuestion9] = useState();
  const [question10, setQuestion10] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="teacher-quiz">
      <h1>SETTING THE QUIZ</h1>
      <h1>Please Select Module</h1>
      <form onSubmit={submitHandler}>
        <label>
          Select Module
          <select
            name="module"
            onChange={(e) => setModule(e.target.value)}
            value={module}
          >
            <option value="html">HTML</option>
            <option value="js">JavaScript</option>
            <option value="react">REACT</option>
            <option value="nodes">NODES</option>
            <option value="sql">SQL</option>
          </select>
        </label>
        <h2>Set Questions</h2>
        <div className="question-one">
          <h1>Question 1</h1>
          <p>PLease type the question</p>
          <input
            type="text"
            value={question1}
            onChange={(e) => setQuestion1(e.target.value)}
          />
          <br></br>
          <h2>Please Select the Correct answer</h2>
          <br></br>
          <label>
            Correct answer
            <input
              type="checkbox"
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
        </div>
        <div className="question-two">
          <h1>Question 2</h1>
          <p>PLease type the question</p>
          <input
            type="text"
            value={question2}
            onChange={(e) => setQuestion2(e.target.value)}
          />
          <br></br>
          <h2>Please Select the Correct answer</h2>
          <br></br>
          <label>
            Correct answer
            <input
              type="checkbox"
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
        </div>
        <div>
          <h1>Question 3</h1>
          <p>PLease type the question</p>
          <input
            type="text"
            value={question3}
            onChange={(e) => setQuestion3(e.target.value)}
          />
          <br></br>
          <h2>Please Select the Correct answer</h2>
          <br></br>
          <label>
            Correct answer
            <input
              type="checkbox"
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
        </div>
        <div>
          <h1>Question 4</h1>
          <p>PLease type the question</p>
          <input
            type="text"
            value={question4}
            onChange={(e) => setQuestion4(e.target.value)}
          />
          <br></br>
          <h2>Please Select the Correct answer</h2>
          <br></br>
          <label>
            Correct answer
            <input
              type="checkbox"
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
        </div>
        <div>
          <h1>Question 5</h1>
          <p>PLease type the question</p>
          <input
            type="text"
            value={question5}
            onChange={(e) => setQuestion5(e.target.value)}
          />
          <br></br>
          <h2>Please Select the Correct answer</h2>
          <br></br>
          <label>
            Correct answer
            <input
              type="checkbox"
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
        </div>
        <div>
          <h1>Question 6</h1>
          <p>PLease type the question</p>
          <input
            type="text"
            value={question6}
            onChange={(e) => setQuestion6(e.target.value)}
          />
          <br></br>
          <h2>Please Select the Correct answer</h2>
          <br></br>
          <label>
            Correct answer
            <input
              type="checkbox"
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
        </div>
        <div>
          <h1>Question 7</h1>
          <p>PLease type the question</p>
          <input
            type="text"
            value={question7}
            onChange={(e) => setQuestion7(e.target.value)}
          />
          <br></br>
          <h2>Please Select the Correct answer</h2>
          <br></br>
          <label>
            Correct answer
            <input
              type="checkbox"
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
        </div>
        <div>
          <h1>Question 8</h1>
          <p>PLease type the question</p>
          <input
            type="text"
            value={question8}
            onChange={(e) => setQuestion8(e.target.value)}
          />
          <br></br>
          <h2>Please Select the Correct answer</h2>
          <br></br>
          <label>
            Correct answer
            <input
              type="checkbox"
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
        </div>
        <div>
          <h1>Question 9</h1>
          <p>PLease type the question</p>
          <input
            type="text"
            value={question9}
            onChange={(e) => setQuestion9(e.target.value)}
          />
          <br></br>
          <h2>Please Select the Correct answer</h2>
          <br></br>
          <label>
            Correct answer
            <input
              type="checkbox"
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
        </div>
        <div>
          <h1>Question 10</h1>
          <p>PLease type the question</p>
          <input
            type="text"
            value={question10}
            onChange={(e) => setQuestion10(e.target.value)}
          />
          <br></br>
          <h2>Please Select the Correct answer</h2>
          <br></br>
          <label>
            Correct answer
            <input
              type="checkbox"
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
          <label>
            Wrong answer
            <input
              type="checkbox"
              value={wrongAnswer}
              onChange={(e) => setWrongAnswer(e.target.checked)}
            />
          </label>
        </div>
        <br></br>
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
};

export default TeacherQuiz;
