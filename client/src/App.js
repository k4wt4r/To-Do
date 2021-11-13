import "./App.css";

import TodoList from "./components/TodoList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Router>
      <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        {<Route path="/">
          <TodoList />
        </Route> }
      </Switch>
      </div>
    </Router>
  );
}

export default App;
