import "./Quiz.css";
import React, { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import Question from "../../Component/Question/Question";

const Quiz = ({ name, score, questions = [], setQuestions, setScore }) => {

  const [options, setOptions] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
console.log(questions);
  useEffect(() => {
    setOptions(
      questions.length > 0 &&
        handleShuffle([
          questions[currentQuestion]?.answer,
          //...questions[currentQuestion]?.incorrectAnswerArrayOfObject,
        ])
    );
  }, [questions, currentQuestion]);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <span className="subtitle"> Welcome: {name}</span>
      {questions.length > 0 ? (
        <>
          <div className="quizInfo">
            {console.log(questions, currentQuestion, options)}
            <span>{questions[currentQuestion].module_name}</span>
            <span>Score: {score}</span>
          </div>
          <Question
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            questions={questions}
            options={options}
            correct={questions[currentQuestion]?.answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
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
