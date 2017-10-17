import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-around;

    img {
        height: 300px;
        float: bottom;
    }
`

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
                <div class="container">
                {<h1>{this.state.movie.title}</h1>}
         <div class="container-fluid">
        <div class="row">
        <div class="col-sm-12 text-center bg-green">
        <img class="img-responsive text-center" />
        <FlexContainer>
        {this.state.movie.map((movie) => {
         return (<div><Link key={movie._id} to={`/movies/${movie._id}/review`}><img src={movie.title}/></Link></div>)
            })}
        </FlexContainer>
        </div>
        </div>
        </div>
        </div>
            )
        }
    }

export default MoviePage;