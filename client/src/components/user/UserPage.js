import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import CreateNewUserForm from './CreateNewUserForm'
import styled from 'styled-components'

const FlexContainer = styled.div`
color: white;


`

class UserPage extends Component {
    state = {
        users: []
    }

    componentWillMount () {
        this.getAllUsers()
    }

    getAllUsers = async () => {
        const res = await axios.get('/api/users')
        this.setState({users: res.data})
    }

    deleteUser = async (userId) => {        
        const res = await axios.delete(`/api/users/${userId}`)
        this.setState({user: res.data})
      }

    render() {
        return (
        <FlexContainer>
            <div>
               <h1>Previous-Users</h1>
               {this.state.users.map((user) => {
                   return (
                    <div class="username">
                        <Link to={`/user/${user._id}`}>{user.userName}</Link>
                        <button onClick={() => this.deleteUser(user._id)}>Delete User</button>
                        
                    </div>
               
                   )
               })} 
               <CreateNewUserForm />
               </div>
            </FlexContainer>
        );
    }
}

export default UserPage;