import React, {Component} from 'react';

class Home extends Component{
    constructor(props) {
        super(props);
        this.state={
            allMoviesArray: [],
        }
    }

    componentDidMount() {
        this.getAllMovies();
    }

    getAllMovies=()=>{
                fetch("/movies/")
                    .then(data => data.json())
                    .then(response => {
                        let tempRespsonse = response.map(
                            (eachMovie) => {
                                return (<div key={eachMovie.id}>
                                    <p>
                                        {eachMovie.movieTitle}
                                    </p>

                                </div>)
                            }
                        );
                        this.setState({allMoviesArray: tempRespsonse});
                    })
    }

    verifyInformation = (e) => {
        e.preventDefault();
        let usernameToSend = e.target.username.value
        fetch("user_authentication/",{
            method:'post',
            headers:{
                'Accept': "application/json",
                'Content-type': "application/json"
            },
            body : JSON.stringify({
                username:e.target.username.value,
                password:e.target.password.value
            })
        })
            .then(data => data.text())
            .then(info => {
                if(info === "False")
                {
                    alert("Username or password Did Not Match.")
                }
                else
                    {
                        this.props.logPersonIn(usernameToSend,info)
                    }
            })
    }

    render() {
        if(this.props.isLoggedIn) {
            return (<div>
                <h1>Home</h1>
                {this.state.allMoviesArray}
            </div>);
        }
        else{
            return (<div>
                <h1>Please Log In</h1>
                <form onSubmit={this.verifyInformation}>
                    <p><input id={"username"} type="text" placeholder={"Username"}/></p>
                    <p><input id={"password"} type="password" placeholder={"Password"}/></p>
                    <button>Submit</button>
                </form>
            </div>)
        }
    }
}

export default Home;