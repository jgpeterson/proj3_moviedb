import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import MoviePage from './components/review/MoviePage'
import ReviewPage from './components/review/ReviewPage'
import UserPage from './components/user/UserPage'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <div>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/user">UserPage</Link>
        </div>
        <div>
        <Link to="/movies">Movies</Link>
        </div>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/user" component={UserPage} />
          <Route exact path="/review/:reviewId" component={ReviewPage} />
          <Route exact path="/movies" component={MoviePage} />
        </Switch>
        </div>
        </Router>
    );
  }
}

export default App;
