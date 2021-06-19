import { Route, Switch } from "react-router-dom";
import AllRegisterFiles from "./Component/allRegisterFiles";
import About from "./pages/About";
import Home from "./pages/Home";
import AllLoginFiles from "./components/allLoginFiles";

const App = () => (

  <Switch>
    
    <AllLoginFiles />

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
