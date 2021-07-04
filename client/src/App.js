import React, { useContext } from "react";
import Start from "./Component/Start";
import { AuthContext } from "./Context/AuthContext";
import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import MainHome from "./pages/MainHome";
import LoginForm from "./Component/LoginForm"
import Layout from "./Component/Layout";
import TeacherRegistrationForm from "./Component/TeacherRegistrationForm";
import StudentRegistrationForm from "./Component/StudentRegistrationForm";
import StudentDashboard from "./Component/StudentDashboard";
import QuizData from "./QuizComponent/QuizData";


  

const App = () => {
  const {isAuthenticated} = useContext(AuthContext);
return (
  <Switch>
    <Layout>
      {isAuthenticated ? (
        <>
          <Route path="/protected" exact>
          </Route>
          <Route path="/about/this/site">
            <About />
          </Route>
        </>
      ) : (
       
        <>
          <Route path="/login">
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

          <Route path="/quizDetails">
            <QuizData />
          </Route>
          <Route path="/start">
            <Start/>
          </Route>
        </>
      )}
    </Layout>
  </Switch>
);
};

export default App;






//   <Switch>
//     {isAuthenticated?(
//       <>
//       <Route path="/protected" exact>
//       <Home />
//     </Route>
//     <Route path="/about/this/site">
//       <About />
//     </Route>
// </>


// function App() {
//   return (
//     <div className="App">

//      <AllLoginFiles/>
//     </div>
//   );
// }
