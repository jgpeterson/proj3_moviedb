import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


class MoviePage extends Component {
    state={
        movie: []
    }
componentWillMount(){
    this.getMovies()
}
    // async componentWillMount () {
    //     const { reviewId } = this.props.match.params
    //     const res = await axios.get(`/api/movies`)
    //     console.log(res.data)
    //     this.setState({movie: res.data})
    // }
    getMovies = async () => {
        const res = await axios.get('/api/movies')
        console.log(res.data)
        this.setState({movie: res.data})
    }

    render() {
            return (
                <div>
                {<h1>{this.state.movie.title}</h1>}
        {this.state.movie.map((movie) => {
         return (<div><Link key={movie._id} to={`/movies/${movie._id}/review`}>{movie.title}</Link></div>)
            })}
        </div>
            )
        }
    }

export default MoviePage;