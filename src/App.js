import './App.css';
import Lyon from './Lyon.js';
import logo from './img/comfy_logo.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/lyon">
          <Lyon/>
        </Route>
        <Route path="/">
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
