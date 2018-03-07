import React, { Component } from 'react';
import styled from 'styled-components'


const FlexContainer = styled.div`

padding: -200%;

@media screen and (max-width:450px) {
    .banner img {
        font-size: 1.25rem;
        max-width: 550px;
        justify-content: space-between;
        align: center;
        margin-left: -1%;
        
    }

`


class UserPage extends Component {
    render() {
        return (

            <FlexContainer>
            <div>
                <img src="https://i.imgur.com/sNIqg6F.jpg"/> 
            </div>
            </FlexContainer>
        );
    }
}

export default UserPage;