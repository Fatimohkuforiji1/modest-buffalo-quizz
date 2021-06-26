import React, { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import { Route, Switch } from "react-router-dom";
import AllRegisterFiles from "./Component/AllRegisterFiles";
import About from "./pages/About";
import Home from "./pages/Home";
import Register from "./Component/Register"
import Login from "./Component/Login"
import Layout from "./Component/Layout";
import TeacherRegistrationForm from "./Component/TeacherRegistrationForm";
import StudentRegistrationForm from "./Component/StudentRegistrationForm";
// import TeacherDashboard from "./Component/TeacherDashboard";
import StudentDashboard from "./Component/StudentDashboard";


  

const App = () => {
  const {isAuthenticated} = useContext(AuthContext);
return (
  <Switch>
    <Layout>
     {isAuthenticated ? (
        <>
          <Route path="/protected" exact>
            <Home />
          </Route>
          <Route path="/about/this/site">
            <About />
          </Route>
        </>
      ) : (
        // <AllRegisterFiles />
        <>
          <Route path="/register">
            <Register />
          </Route>

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

          <Route path="/dashboard/student">
            <StudentDashboard />
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
