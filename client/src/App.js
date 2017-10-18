import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import MoviePage from './components/review/MoviePage'
import ReviewPage from './components/review/ReviewPage'
import UserPage from './components/user/UserPage'
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <div class="container">
        <span class="nav-trigger">NAV</span>
        <div class="item">
          <Link to="/">Home</Link>
        </div>
        <div class="item">
          <Link to="/user">UserPage</Link>
        </div>
        <div class="item">
        <Link to="/movies">Movies</Link>
        </div>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/user" component={UserPage} />
          <Route exact path="/movies/:movieId/review" component={ReviewPage} />
          <Route exact path="/movies" component={MoviePage} />
        </Switch>
        </div>
        </Router>
    );
  }
}

export default App;
