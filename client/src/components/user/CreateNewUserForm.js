import React, { Component } from 'react';
import axios from 'axios'

class CreateNewUserForm extends Component {
    state = {
        newUser: {
            userName: ''
        }
    }

    handleChange = (event) => {

        const attribute = event.target.name 
        const updateUser = {...this.state.newUser}
        updateUser[attribute] = event.target.value
        this.setState({newUser: updateUser})
    }


handleSubmit = async (event) => {
    event.preventDefault()
    const res = await axios.post('/api/users', {
        "user": this.state.newUser
    })
    console.log(res)
}


    render() {
        return (
            <div>
                <h1>Create-User</h1>
            <form onSubmit={this.handleSubmit}>
            <div>
            <label htmlFor="userName">User Name</label>
            <input onChange={this.handleChange} name="userName" type="text" value={this.state.newUser.userName} /> 
            </div>
            <div>
            </div>
            <div>
            <button>Create User</button>
            </div>
            </form>
            </div>
        );
    }
}

export default CreateNewUserForm;