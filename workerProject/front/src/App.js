import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Start from './components/Start';
import Main from './components/Main';
import Community from './components/Community';
import Post from './components/Post';


class App extends React.Component {



  render() {
    return (
      <div>
        <Route path='/' component={Start} exact={true} />
        <Route path='/home' component={Main} />
        <Route path='/community' component={Community} />
        <Route path='/post' component={Post} />
      </div>
    )
  }
}

export default App;
