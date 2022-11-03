import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from '../components/footer';
import LoginForm from '../components/loginform';
import Middle from '../components/middle';
import NavBar from '../components/navbar';

export default class Main extends Component {
  render() {
    return (
        <div>   
          <NavBar/>
          <hr
        img
        style={{
          background: "#2bd7f1",
          color: "#2bd7f1",
          borderColor: "#2bd7f1",
          height: "10px",
        }}></hr>
          <Switch>
            <Route path= "/middle" component={Middle} />
            {/* exact used to prevent switch from confusion with other menu links */}
            <Route exact path="/login" component={LoginForm} />
            <Redirect to="/middle" />
          </Switch>
          <Footer/>
        </div>
      );
  }
}

