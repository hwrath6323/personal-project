import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Views/Login/Login.js';
import Register from './Views/Register/Register.js';
import Dashboard from './Views/Dashboard/Dashboard.js';
import Header from './Shared/Header/Header.js';

import './App.css';


class App extends Component {

  render(){
    return(
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route path='/register' component={Register} />
            <Route path='/dashboard' component={Dashboard} />
            <Route default path='/' component={Login} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
