import axios from "axios";
import React, { useState, useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./Pages/Home/About";
import MainHome from "./pages/MainHome";
import LoginForm from "./Component/LoginForm";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
import Layout from "./Component/Layout";
import TeacherRegistrationForm from "./Component/TeacherRegistrationForm";
import StudentRegistrationForm from "./Component/StudentRegistrationForm";
import TeacherDashboard from "./Component/TeacherDashboard";
import StudentDashboard from "./Component/StudentDashboard";
// import QuizData from "./QuizComponent/QuizData";

const App = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [student_answer, setStudent_answer] = useState([]);
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const updateStudentAnswers = (answer) => {
    console.log("to student answer", typeof student_answer);
    console.log("student answer", student_answer);
    student_answer.push(answer);
    setStudent_answer(student_answer);
  };

  const submitQuiz = () => {
    fetch("http://localhost:3100/api/quiz-submission", {
      method: "POST",
      body: JSON.stringify(student_answer),
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  const fetchQuestions = async (category = "") => {
    // const { data } = await axios.get(`http://localhost:3100/api/quiz/1`); //${category}`);
    const { data } = await axios.get(
      `http://localhost:3100/api/quiz/${category}`
    );
    console.log("data", data);
    setQuestions(data);
    console.log(name);
  };

  return (
    <div className="app">
      {/* <Header /> */}
      {/* <Header /> */}
      <Switch>
        <Layout>
          {isAuthenticated ? (
            <>
              <Route path="/about/this/site">
                <About />
              </Route>
            </>
          ) : (
            <>
              <Route path="/quiz-home" exact>
                <Home
                  name={name}
                  setName={setName}
                  fetchQuestions={fetchQuestions}
                />
              </Route>
              <Route path="/quiz" exact>
                <Quiz
                  name={name}
                  questions={questions}
                  score={score}
                  setScore={setScore}
                  setQuestions={setQuestions}
                  updateStudentAnswers={updateStudentAnswers}
                  submitQuiz={submitQuiz}
                />
              </Route>
              <Route path="/result" exact>
                <Result score={score} name={name} />
              </Route>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/" exact>
                <LoginForm />
              </Route>
              <Route path="/" exact>
                <MainHome />
              </Route>
              <Route path="/register/teacher">
                <TeacherRegistrationForm />
              </Route>
              <Route path="/register/student">
                <StudentRegistrationForm />
              </Route>
              <Route path="/dashboard/student">
                <StudentDashboard />
              </Route>
              <Route path="/dashboard/teacher">
                <TeacherDashboard />
              </Route>
            </>
          )}
        </Layout>
      </Switch>
    </div>
  );
};
export default App;
