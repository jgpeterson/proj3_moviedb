import React, { Component } from 'react';
import styled from 'styled-components'


const FlexContainer = styled.div`
display: flex;
justify-content: space-around;
padding: 150px;
float: center;
`


class UserPage extends Component {
    render() {
        return (

            <FlexContainer>
            <div>
                <img src="https://i.imgur.com/zkSEnuE.jpg"/> 
            </div>
            </FlexContainer>
        );
    }
}

export default UserPage;