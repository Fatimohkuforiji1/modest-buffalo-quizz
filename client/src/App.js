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
import TeacherDashboard from "./Component/TeacherDashboard";
import StudentRegistrationForm from "./Component/StudentRegistrationForm";
import TeacherRegistration from "./Component/TeacherRegistrationForm";
import StudentDashboard from "./Component/StudentDashboard";
import TeacherQuiz from "./Component/TeacherQuiz/TeacherQuiz";
import StudentLogin from "./Component/StudentLogin";





const App = () => {
const { isAuthenticated } = useContext(AuthContext);


const [name, setName] = useState("");
const [questions, setQuestions] = useState();
const [score, setScore] = useState(0);

const fetchQuestions = async(category = "") => {
// const { data } = await axios.get(
//   `https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`
//  );
//  setQuestions(data.results);
//  console.log(data.results);

  const myData = await axios.post("http://localhost:3100/api/quizDetails", {
    module: category,
  });
console.log(myData);
setQuestions(myData.data)


}



  return (
    <div className="app">
      <Switch>
        <Layout>
          {isAuthenticated ? (
            <>
              {/* <Route path="/about/this/site">
                <About />
              </Route> */}

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

              <Route path="/student/login">
                <StudentLogin />
              </Route>
            </>
          ) : (
            <>
              <Route path="/login" exact>
                <LoginForm />
              </Route>
              <Route path="/" exact>
                <MainHome />
              </Route>

              <Route path="/register">
                <TeacherRegistration />
              </Route>

              <Route path="/teacherQuiz" exact>
                <TeacherQuiz />
              </Route>

              <Route path="/student-register">
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


// modified: client / src / App.js;
//  client/src/Component/TeacherQuiz/