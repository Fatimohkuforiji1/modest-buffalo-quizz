import { Button } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
import "./Question.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Question = ({
  currentQuestion,
  setCurrentQuestion,
  questions,
  options,
  correct,
  setScore,
  score,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const history = useHistory();

  const handleSelect = (i) => {
    if (selected === i && selected === correct) {
      return "select";
    } else if (selected === i && selected !== correct) {
      return "wrong";
    } else if (i === correct) {
      return "select";
    }
  };

  const handleCheck = (i) => {
    console.log(questions[currentQuestion]);
    setSelected(i);
    if (i === correct) {
      setScore(score + 1);
      setError(false);
    }
  };
  const handleNext = () => {
    if (currentQuestion > 8) {
      history.push("/result");
    } else if (selected) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected();
    } else {
      setError("Please select an option first");
    }
  };

  const handleQuit = () => {
    setCurrentQuestion(0);
  };

  return (
    <div className="question">
      <h1>Question {currentQuestion + 1} :</h1>

      <div className="singleQuestion">
        <h2>{questions[currentQuestion].question}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>

          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            {currentQuestion > 20 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
//       modified:   client/src/Component/TeacherRegistrationForm.js
//         deleted:    client/src/Component/allRegisterFiles.js
//         modified:   client/src/Start.css
//         modified:   client/src/landingPageComponent/Footer.js
//         modified:   client/src/landingPageComponent/Header.css
//         modified:   client/src/landingPageComponent/Header.js
//         modified:   package-lock.json
//         modified:   package.json
//         modified:   quizInserted.sql
//         modified:   server/api.js

// Untracked files:
//   (use "git add <file>..." to include in what will be committed)
//         client/src/Component/AccountSuccess.js
//         client/src/Component/TeacherQuiz/
//         client/src/Component/Validate.js