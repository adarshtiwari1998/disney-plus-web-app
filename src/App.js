import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header"
import './App.css';
import Home from "./components/Home";
import CardDetails from "./components/CardDetails";

function App() {
  return (
    <div className="App">
      <Router>
       <Header/>
        <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/carddetails/:id">
           <CardDetails />
        </Route>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
