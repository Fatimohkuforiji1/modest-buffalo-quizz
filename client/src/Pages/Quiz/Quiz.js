import "./Quiz.css";
import React, { useState, useEffect, useContext } from "react";
import { CircularProgress } from "@material-ui/core";
import Question from "../../Component/Question/Question";
import { AuthContext } from "../../Context/AuthContext";

const Quiz = ({
  name,
  score,
  questions,
  setQuestions,
  setScore,
  updateStudentAnswers
}) => {
  const { user } = useContext(AuthContext);
  const [options, setOptions] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currentQuestion]?.correct_answer,
          ...questions[currentQuestion]?.incorrect_answers,
        ])
    );
  }, [questions, currentQuestion]);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <span className="subtitle"> Welcome: {user.firstName}</span>
      {questions ? (
        <>
          <div className="quizInfo">
            <span>{questions[currentQuestion].category}</span>
            <span>Score: {score}</span>
          </div>
          <Question
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            questions={questions}
            options={options}
            correct={questions[currentQuestion]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
            updateStudentAnswers={updateStudentAnswers}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;
