import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'


class MoviePage extends Component {
    state={
        movie: []
    }

    async componentWillMount () {
        const { reviewId } = this.props.match.params
        const res = await axios.get(`/api/movies`)
        console.log(res.data)
        this.setState({movie: res.data})
    }

    render() {
            return (
                <div>
                    
                 </div>
             
            )
            }}

export default MoviePage;