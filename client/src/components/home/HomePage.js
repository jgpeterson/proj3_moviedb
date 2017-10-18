import React, { Component } from 'react';
import styled from 'styled-components'


const FlexContainer = styled.div`
display: flex;
justify-content: space-around;
padding: 250px;
float: center;
`


class UserPage extends Component {
    render() {
        return (

            <FlexContainer>
            <div>
                <h1>Welcome to Moviepalooza!!</h1>
                <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/EXeTwQWrcwY" frameborder="0" allowfullscreen></iframe>
                </div>  
            </div>
            </FlexContainer>
        );
    }
}

export default UserPage;