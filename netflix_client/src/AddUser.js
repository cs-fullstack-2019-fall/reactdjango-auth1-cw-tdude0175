import React, {Component} from 'react';

class AddUser extends Component {


    createNewUser = (e) => {
        e.preventDefault();
        fetch(`/users/`, {
            method: 'post',
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username: e.target.username.value,
                password: e.target.password.value
            })
        })
            .then(data => data.json())
            .then(prettyData => {
                if (prettyData.id !== undefined) {
                    this.props.logPersonIn(prettyData.username,prettyData.id)
                } else {
                    alert(prettyData.username)
                }
            })

    }


    render() {
        return (
            <div>
                <h1>Create new user</h1>
                <form onSubmit={this.createNewUser}>
                    <p><input type="text" id={"username"} placeholder={"Username"}/></p>
                    <p><input type="password" id={"password"} placeholder={"Password"}/></p>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}


export default AddUser;