import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllUsers } from "../../actions/usersActions";
import { bindActionCreators } from "redux";
import UserItem from "./UserItem";
import "./usersList.css";

class UsersList extends Component {
  state = {};
  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    return (
      <div className="listUsers">
        {this.props.data.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.Reducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllUsers: bindActionCreators(getAllUsers, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);
