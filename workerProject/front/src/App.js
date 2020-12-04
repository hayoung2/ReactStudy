import logo from './logo.svg';
import './App.css';
import Start from './components/Start';
import Main from './components/Main';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route path='/' component={Start} exact={true} />
      <Route path='/home' component={Main} />
    </div>
  );
}

export default App;
