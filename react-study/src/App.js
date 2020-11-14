import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import ClassTest from './pages/ClassTest';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/user">User</Link>
              </li>
              <li>
                <Link to="/classTest">ClassTest</Link>
              </li>
            </ul>
          </nav>

          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/user' component={User} />
          <Route path='/classTest' component={ClassTest} />
        </div>
      </Router>
    );
  }
}

export default App;