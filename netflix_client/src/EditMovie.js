import React, {Component} from 'react';

class EditMovie extends Component{
    constructor(props) {
        super(props);
        this.state = {
            movieID: this.props.match.params.movieID,
            movieObject: "",
        };
    }

    componentDidMount() {
        fetch(`/movies/${this.state.movieID}/`)
            .then(data=>data.json())
            .then(response=>this.setState({movieObject: response}))
    }

    submitForm=(e)=>{
        e.preventDefault();
        let tempBody = {
            id: this.state.movieID.id,
            movieTitle: document.getElementById("movieTitle").value,
            rating: document.getElementById("rating").value,
            movieLength: document.getElementById("movieLength").value,
            views: document.getElementById("views").value,
        };
        fetch(`/movies/${this.state.movieID}/`,{
            method: 'put',
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(tempBody),
        })
            .then(data=>data.json())
            .then(resp=>console.log(resp))
            .then(this.props.history.push("/"));
    };

    render() {
        return(
            <div>
                <h1>Edit {this.state.movieObject.movieTitle}</h1>
                <form onSubmit={this.submitForm}>
                    <label htmlFor="movieTitle">Enter Movie Title</label>
                    <input type="text" id="movieTitle" defaultValue={this.state.movieObject.movieTitle} /><br/>

                    <label htmlFor="rating">Enter Rating</label>
                    <input type="text" id="rating"  defaultValue={this.state.movieObject.rating}/><br/>

                    <label htmlFor="movieLength">Enter Movie Length</label>
                    <input type="text" id="movieLength"  defaultValue={this.state.movieObject.movieLength} /><br/>

                    <label htmlFor="views">Enter Views</label>
                    <input type="text" id="views"  defaultValue={this.state.movieObject.views} /><br/>

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default EditMovie;