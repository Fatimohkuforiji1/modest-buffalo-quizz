import React, { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import TeacherRegistrationForm from "./Component/TeacherRegistrationForm";
import StudentRegistrationForm from "./Component/StudentRegistrationForm";

const App = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Switch>
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
        <>
          <Route path="/register/teacher">
            <TeacherRegistrationForm />
          </Route>

          <Route path="/register/student">
            <StudentRegistrationForm />
          </Route>
        </>
      )}
    </Switch>
  );
};

export default App;
