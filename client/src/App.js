import axios from "axios";
import React, { useState, useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import {Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./Pages/Home/About";
import MainHome from "./pages/MainHome";
import LoginForm from "./Component/LoginForm"
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
import Layout from "./Component/Layout";
import TeacherRegistration from "./Component/TeacherRegistrationForm";
import StudentRegistrationForm from "./Component/StudentRegistrationForm";
import TeacherDashboard from "./Component/TeacherDashboard";
import StudentDashboard from "./Component/StudentDashboard";
import QuizData from "./QuizComponent/QuizData";
import TeacherQuiz from "./Component/TeacherQuiz/TeacherQuiz";
import QuizButton from "./QuizComponent/QuizButton";

const App = () => {
const { isAuthenticated } = useContext(AuthContext);


const [name, setName] = useState("");
const [questions, setQuestions] = useState();
const [score, setScore] = useState(0);

const fetchQuestions = async(category = "") => {
const { data } = await axios.get(
  `https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`
);
const myData = await axios.post("http://localhost:3100/api/quizDetails", {
  module: category,
});
// fetch("http://localhost:3100/api/quizDetails", {
//       method: "POST",
//       body: JSON.stringify({ module: moduleType }),
//       headers: {
//         "Content-type": "application/json",
//       },
setQuestions(myData.data);
console.log(data.results)
console.log(myData)
}


  return (
    <div className="app">
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
                />
              </Route>
              <Route path="/result" exact>
                <Result score={score} name={name} />
              </Route>

              <Route path="/" exact>
                <MainHome />
              </Route>
              <Route path="/login" exact>
                <LoginForm />
              </Route>
              <Route path="/teacherQuiz" exact>
                <TeacherQuiz />
              </Route>
              <Route path="/register/teachers">
                <TeacherRegistration />
              </Route>

              <Route path="/teacherQuiz" exact>
                <TeacherQuiz />
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
              <Route path="/quiz/react">
                <QuizButton />
              </Route>

              <Route path="/quizDetails/:moduleType">
                <QuizData />
              </Route>
            </>
          )}
        </Layout>
      </Switch>
    </div>
  );
};
export default App;


// modified: client / src / App.js;
//  client/src/Component/TeacherQuiz/