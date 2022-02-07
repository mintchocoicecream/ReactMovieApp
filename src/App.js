import {BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import About from "./components/About";

function App() {
  return <Router>
    <Switch>
    <Route path="/about">
        <Navigation />
        <About />
      </Route>
      <Route path="/ReactMovieApp/movie/:id">
        <Navigation />
        <Detail />
      </Route> 
      <Route path="/ReactMovieApp">
        <Navigation />
        <Home />
      </Route>
    </Switch>
  </Router>;
}

export default App;