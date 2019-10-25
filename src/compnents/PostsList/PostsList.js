import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllPosts } from "../../actions/usersActions";
import PostItem from "../PostItem/PostItem";
import "./PostsList.css";
import { getAllUsers } from "../../actions/usersActions";

class PostsList extends Component {
  componentDidMount() {
    this.props.getAllPosts();
  }

  render() {
    const userName = this.props.allState.users.filter(
      user => String(user.id) === this.props.match.params.id
    );
    const filteredPosts = this.props.allState.posts.filter(
      post => String(post.userId) === this.props.match.params.id
    );
    return (
      <div className="allposts">
        {filteredPosts.map(post => (
          <PostItem key={post.id} post={post} userName={userName} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allState: state.Reducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllPosts: bindActionCreators(getAllPosts, dispatch),
    getAllUsers: bindActionCreators(getAllUsers, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList);
