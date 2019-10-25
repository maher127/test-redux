import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllComments } from "../../actions/usersActions";
import CommentItem from "../CommentItem/CommentItem";
import "./CommentList.css";

class CommentList extends Component {
  componentDidMount() {
    this.props.getAllComments();
  }
  render() {
    const filteredComments = this.props.allState.comments.filter(
      comment => String(comment.postId) === this.props.match.params.postId
    );
    const post = this.props.allState.posts.filter(
      post => String(post.id) === this.props.match.params.postId
    );
    const userName = this.props.allState.users.filter(
      user => String(user.id) === this.props.match.params.id
    );
    console.log(this.props.allState);
    console.log(filteredComments);
    console.log(post);

    return (
      <div>
        {filteredComments.map(comment => (
          <CommentItem comment={comment} key={comment.id} />
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
    getAllComments: bindActionCreators(getAllComments, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);
