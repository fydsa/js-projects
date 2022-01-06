import "./App.css";
import Navbar from "./components/navbar/navbar.component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route />
          <Route />
          <Route />
          <Route /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
