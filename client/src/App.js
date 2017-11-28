import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import MoviePage from './components/review/MoviePage'
import ReviewPage from './components/review/ReviewPage'
import UserPage from './components/user/UserPage'
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'

const Head = styled.div`
@media screen and (max-width:450px) {
    .container {
        font-size: 1rem;
        margin-right: 30%;
    
    }
    .item {
        font-size: 25px;
        margin: 30px;
        margin-left: -12%;
    }
   }
`
class App extends Component {
  render() {
    return (
      <Head>
      <Router>
        <div>
        <div class="container">
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
        </Head>
    );
  }
}

export default App;
