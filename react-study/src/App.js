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
import Life from './pages/LifeCycleSample';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }
  render() {
    const names = ['/about', 'user']
    const nameList = names.map(name => <li><Link to={name}>{name}</Link></li>)
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {nameList}
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
          <div>
            <button onClick={this.handleClick}>랜던 색상</button>
            <Life color={this.state.color} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;