import React, {Component} from 'react';
import {Link} from "react-router-dom";

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
            .then(data=>data.json())
            .then(response=>{
                let tempRespsonse = response.map(
                    (eachMovie)=>{
                        return(<div key={eachMovie.id}>
                            <Link to={"/editMovies/"+ eachMovie.id}>
                                {eachMovie.movieTitle}
                            </Link>

                        </div>)
                    }
                );
                this.setState({allMoviesArray: tempRespsonse});
            })
    }

    render() {
        return(<div>
            <h1>Home</h1>
            {this.state.allMoviesArray}
        </div>);
    }
}

export default Home;