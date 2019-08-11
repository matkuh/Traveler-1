import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path='/signup' component={Signup} />
      </Router>
    </div>
  );
}

export default App;
