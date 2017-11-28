import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-around;

    img {
        height: 400px;
        float: bottom;
    }

    @media screen and (max-width:450px) {
        .poster img {
            max-width: 300px;
            height: 150px;
            margin: 10px;
            display: flex;
            flex-direction: column;
        }
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
            <div>
                {<h1>{this.state.movie.title}</h1>}
         
        <FlexContainer>
        {this.state.movie.map((movie) => {
         return (<div class="poster"><Link key={movie._id} to={`/movies/${movie._id}/review`}><img src={movie.title}/></Link></div>)
            })}
        </FlexContainer>
        </div>
            )
        }
    }

export default MoviePage;