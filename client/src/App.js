import React, {useContext} from "react";
import { AuthContext } from "./Context/AuthContext";
import { Route, Switch } from "react-router-dom";
import AllRegisterFiles from "./Component/AllRegisterFiles";
import About from "./pages/About";
import Home from "./pages/Home";
import Register from "./Component/Register"
import Login from "./Component/Login"
import Layout from "./Component/Layout";

  

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
