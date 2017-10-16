import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'


class ReviewPage extends Component {
    state={
        review: {
            title: '',
            tagline: '',
            review: []
        }
    }

    async componentWillMount () {
        const { userId } = this.props.match.params
        const res = await axios.get(`/api/movies/${reviewId}`)
        console.log(res.data)
        this.setState({user: res.data})
    }

    render() {
        return (
            <div>
              <h1>{this.state.user.userNames}'s Movie Review'</h1> 
              {this.state.user.reviews.map((review) => {
            return (
                <div key={review._id}>
                 <h3>{review.title}</h3>
                 <h4>{review.tagline}</h4>
                 <p>{review.review}</p>
              </div>
            )
            })}
            </div>
        );
    }
}

export default ReviewPage;