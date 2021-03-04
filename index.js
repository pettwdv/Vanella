import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from './App';
import AboutDee from './Pages/AboutDee'
import Home from './Pages/Home'
import './App.css';
import './csshake.min.css';


       

const Destinations = () => (
  <Router>
    <div className="centered">
        <nav>
        <ul className="container float li-style">
          <li>
            <Link to="/App">Countries I want to visit </Link>
          </li>
          <li >
            <Link to="/AboutDee">About Dee</Link>
          </li>
          <li >
            <Link to="/">Home</Link>
          </li>
        </ul>
        </nav>
      <Switch>
      
        <Route path="/App">
          <App />
        </Route>
        <Route path="/AboutDee">
          <AboutDee />
        </Route>
        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </div>
  </Router>
);


ReactDOM.render(
  <Destinations/>,
  document.getElementById('root')
);


                     