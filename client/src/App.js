import React, {useContext} from "react";
import { AuthContext } from "./Context/AuthContext";
import { Route, Switch } from "react-router-dom";
import AllRegisterFiles from "./Component/allRegisterFiles";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  const {isAuthenticated} = useContext(AuthContext);
return(
  <Switch>
    {isAuthenticated?(
      <>
      <Route path="/protected" exact>
      <Home />
    </Route>
    <Route path="/about/this/site">
      <About />
    </Route>
    </> 
    ):(
	<AllRegisterFiles />
      
    )}

    
  </Switch>
)
};


export default App;

// function App() {
//   return (
//     <div className="App">

//      <AllLoginFiles/>
//     </div>
//   );
// }
