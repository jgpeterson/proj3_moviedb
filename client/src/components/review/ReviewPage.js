import React, { Component } from 'react';

import axios from 'axios'
import styled from 'styled-components'


class ReviewPage extends Component {
    state={
        movie: {
            title: '',
            tagline: '',
            poster: '',
            reviews: []
        }

        
    }

    async componentWillMount () {
        const { movieId } = this.props.match.params
        const res = await axios.get(`/api/movies/${movieId}`)
        console.log(res.data)
        this.setState({movie: res.data})
    }

    render() {
        return (
            <div>
              <h1>{this.state.movie.title}</h1> 
              {this.state.movie.reviews.map((review) => {
            return (
                <div key={review._id}>
                 <h4>{review.tagline}</h4>
                 <img src={review.poster}/>
                 <p>{review.review}</p>
              </div>
            )
            })}
            </div>
        );
    }
}

export default ReviewPage;