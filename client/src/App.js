import { Route, Switch } from "react-router-dom";
import AllRegisterFiles from "./Component/allRegisterFiles";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => (

  <Switch>
    
	<AllRegisterFiles />

    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/about/this/site">
      <About />
    </Route>
  </Switch>
);


export default App;

// function App() {
//   return (
//     <div className="App">

//      <AllLoginFiles/>
//     </div>
//   );
// }
