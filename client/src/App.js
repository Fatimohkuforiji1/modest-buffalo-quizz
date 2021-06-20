import React, {useContext} from "react";
import { AuthContext } from "./Context/AuthContext";
import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import AllLoginFiles from "./components/allLoginFiles";

const App = () => {
  const {isAuthenticated} = useContext(AuthContext);
return (
  <Switch>
    {isAuthenticated ? (
      <>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about/this/site">
          <About />
        </Route>
      </>
    ) : (
      <AllLoginFiles />
    )}
  </Switch>
);
};


export default App;

// function App() {
//   return (
//     <div className="App">

//      <AllLoginFiles/>
//     </div>
//   );
// }
