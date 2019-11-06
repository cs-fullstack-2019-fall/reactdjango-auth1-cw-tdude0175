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
import AddUser from "./AddUser";

class Netflix extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                isLoggedIn: false,
                userId: 0,
                username: "",
            }
        }
    }


    logPersonIn= (fedUsername,fedUserId) =>
    {
        this.setState({user:{isLoggedIn: true,userId:fedUserId,username:fedUsername}})
    }

    logPersonOut = () =>
    {
        this.setState({user:{isLoggedIn:false,userId:0,username:""}})
    }

    render() {
        if (this.state.user.isLoggedIn === true) {
            return (<Router>
                <h1>Netflix</h1>
                <Link className="router-link" to="/">All Movies</Link>
                <Link className="router-link" to="/myList">My List</Link>
                <Link className="router-link" to="/add">Add a Favorite</Link>
                <Link onClick={this.logPersonOut} className="router-link" to="/">Log Out</Link>

                <Switch>
                    <Route path="/myList">
                        <MyList/>
                    </Route>

                    <Route path="/add">
                        <AddFavorite/>
                    </Route>

                    <Route path="/editMovies/:movieID" component={EditMovie}>

                    </Route>
                    <Route path="/">
                        <Home logPersonIn={this.logPersonIn} isLoggedIn={this.state.user.isLoggedIn}/>
                    </Route>

                </Switch>
            </Router>)
        }
        else{
            return(
                <Router>
                    <h1>Netflix</h1>
                    <Link className="router-link" to="/">All Movies</Link>
                    <Link className="router-link" to="/newUser">Create New User</Link>

                    <Switch>

                        <Route exact path="/">
                            <Home logPersonIn={this.logPersonIn} isLoggedIn={this.state.user.isLoggedIn}/>
                        </Route>

                        <Route exact path="/newUser">
                            <AddUser logPersonIn={this.logPersonIn}/>
                        </Route>

                    </Switch>
                </Router>
            )
        }
    }
}

export default Netflix;