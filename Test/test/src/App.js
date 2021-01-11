import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Start';
import Payment from './Components/Payment';
import Certification1 from './Components/Certification1';


function App() {
  return (
    <div>
      <Route path='/' component={Home} exact={true} />
      <Route path='/payment' component={Payment} />
      <Route path='/certification' component={Certification1} />
    </div>
  );
}

export default App;
