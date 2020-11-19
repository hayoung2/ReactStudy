import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import ClassTest from './pages/ClassTest';
import stateTest from './pages/stateTest';
import UseState from './pages/UseState';
import EventTest from './pages/EventTest';
import EventFucTest from './pages/EventFucTest';
import ValidationSample from './pages/ValidationSample'
import RefTest from './pages/RefTest';

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
              <li>
                <Link to="/stateTest">stateTest</Link>
              </li>
              <li>
                <Link to="/useState">useState</Link>
              </li>
              <li>
                <Link to="/eventTest">eventTest</Link>
              </li>
              <li>
                <Link to="/eventFucTest">evenFucTest</Link>
              </li>
              <li>
                <Link to="/ref">ref</Link>
              </li>
              <li>
                <Link to="/refTest">refTest</Link>
              </li>
            </ul>
          </nav>

          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/user' component={User} />
          <Route path='/stateTest' component={stateTest} />
          <Route path='/useState' component={UseState} />
          <Route path='/classTest' component={ClassTest} />
          <Route path='/eventTest' component={EventTest} />
          <Route path='/eventFucTest' component={EventFucTest} />
          <Route path='/ref' component={ValidationSample} />
          <Route path='/refTest' component={RefTest} />
        </div>
      </Router>
    );
  }
}

export default App;