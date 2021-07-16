import { Button } from "@material-ui/core";
import { useState , useContext} from "react";
import { useHistory } from "react-router";
import "./Question.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { AuthContext } from "../../Context/AuthContext";

const Question = ({
  currentQuestion,
  setCurrentQuestion,
  questions,
  options,
  correct,
  setScore,
  score,
  updateStudentAnswers
}) => {
  const { user } = useContext(AuthContext);
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

    updateStudentAnswers({
      question_id: questions[currentQuestion].question_id,
      student_answer: i,
      is_correct: i === correct,
      student_id: user.studentId,
    });
  };
  const handleNext = () => {
    if (selected) {
      if (currentQuestion === questions.length - 1) {
        history.push("/result");
      } else setCurrentQuestion(currentQuestion + 1);
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
            {currentQuestion === questions.length - 1
              ? "Submit"
              : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
