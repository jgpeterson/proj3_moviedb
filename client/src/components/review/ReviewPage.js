import React, { Component } from 'react';

import axios from 'axios'
import styled from 'styled-components'

const FlexContainer = styled.div`
display: flex;
justify-content: space-around;
`
const ReviewDiv =styled.div `
    margin-left: 300px;
    font-weight: bolder;
    font-size: 20px;
`

const ScreenshotImg = styled.img`
       float: right;
`   
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
                <FlexContainer>
                <div key={review._id}>
                 <h4>{review.tagline}</h4>
                 <img src={review.poster}/>
                 <div>
                     <a href={review.purchase}>Click here to Rent or Purchase</a>
                 </div>
                 </div>
                 <ReviewDiv>
                 <ScreenshotImg src={review.screenshot}/>
                 <p class="review">{review.review}</p>
                 </ReviewDiv>
                 

              </FlexContainer>
            )
            })}
            </div>
        );
    }
}

export default ReviewPage;