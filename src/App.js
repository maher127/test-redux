import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserList from "./compnents/users/usersList";
import PostsList from "./compnents/PostsList/PostsList";
import CommentList from "./compnents/CommentList/CommentList";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <Route exact path="/" component={UserList} />
            <Route exact path="/posts/:id" component={PostsList} />
            <Route
              exact
              path="/comments/:postId/:userId"
              component={CommentList}
            />
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
