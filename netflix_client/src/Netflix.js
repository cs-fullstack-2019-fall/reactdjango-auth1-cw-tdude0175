import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MyList from "./MyList";
import Home from "./Home";
import EditMovie from "./EditMovie";
import AddFavorite from "./AddFavorite";

class Netflix extends Component{
    render() {
        return(<Router>
            <h1>Netflix</h1>
            <Link className="router-link" to="/">All Movies</Link>
            <Link className="router-link" to="/myList">My List</Link>
            <Link className="router-link" to="/add">Add a Favorite</Link>

            <Switch>
                <Route path="/myList">
                    <MyList/>
                </Route>

                <Route path="/add">
                    <AddFavorite/>
                </Route>

                <Route path="/editMovies/:movieID"  component={EditMovie}>

                </Route>
                <Route path="/">
                    <Home/>
                </Route>

            </Switch>
        </Router>)
    }
}

export default Netflix;