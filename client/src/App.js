import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import Login from './pages/Login';
import Signup from './pages/Signup';

// Utils
import API from './utils/API.js'

// shorthand 
const log = console.log

class App extends Component {

  // All of the functions and states will be available for our whole application

  state = {
    loggedIn: false,
    user_id: ''
  }


  // TO DO: Learn what async is
  componentDidMount() {
    // This method will check on every render of the page if the user is authenticated. If so they can stay on any page, if not they will be redirected to the login page
    API.getUsers().then(user => {
      log(user)
      this.setState({
        loggedIn: user.data.isLoggedin,
        user_id: user.data.id
      })
    })
  }

  logout() {
    API.logout()
      .then(res => {
        log("user is now logged out")
        window.location = "http://localhost:3000"
      })
  }

  render() {

    if (this.state.loggedIn === false) {
      return (
        <div>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path='/signup' component={Signup} />
            </Switch>
          </Router>
        </div >
      );
    } else {
      <Router>
        <Switch>
          <Route exact path="/" component={Feed} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    }

  }

}

export default App;
