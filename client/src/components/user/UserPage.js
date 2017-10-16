import React, { Component } from 'react';

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

    render() {
        return (
            <div>
               <h1>Log-In</h1>
               <h3>Type in Your UserName</h3>
               {this.state.users.map(user => {
                   return (<Link to={`/review/${user._id}`}>{user.userName}</Link>)
               })} 
               <CreateNewUserForm />
            </div>
        );
    }
}

export default UserPage;