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
        console.log("logging in");
        fetch("user_authentication/")
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
                    <p><input type="text" placeholder={"Username"}/></p>
                    <p><input type="password" placeholder={"Password"}/></p>
                    <button>Submit</button>
                </form>
            </div>)
        }
    }
}

export default Home;