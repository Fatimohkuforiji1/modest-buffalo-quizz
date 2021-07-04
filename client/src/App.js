import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/Home/About";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Home/Quiz/Quiz";
import Result from "./Pages/Home/Result/Result";
import Login from "./Component/Login";
import Layout from "./Component/Layout";
import TeacherRegistrationForm from "./Component/TeacherRegistrationForm";
import StudentRegistrationForm from "./Component/StudentRegistrationForm";
import TeacherDashboard from "./Component/TeacherDashboard";
import StudentDashboard from "./Component/StudentDashboard";

const App = () => {
  const { isAuthenticated } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`
    );
    setQuestions(data.results);
  };
  console.log(questions);

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Switch>
          <Layout>
            {isAuthenticated ? (
              <>
                <Route path="/home" exact>
                  <Home
                    name={name}
                    setName={setName}
                    fetchQuestions={fetchQuestions}
                  />
                </Route>
                <Route path="/about/this/site">
                  <About />
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
              </>
            ) : (
              <>
                <Route path="/login">
                  <Login />
                </Route>

                <Route path="/" exact>
                  <Home />
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
      <Footer />
    </BrowserRouter>
  );
};
export default App;
