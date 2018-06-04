import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../actions/index';

class UsersListPage extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => <li key={user.id}>{user.name}</li>);
  }

  render() {
    return (
      <div>
        <h3>Here is the list of users</h3>
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

// The users proptype handles both the actual expected input as well as the empty array,
//  somehow without airbnb eslint pitching a fit about using the array proptype.  Calling that a win.
UsersListPage.propTypes = {
  users: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })),
    PropTypes.array.isRequired,
  ]).isRequired,
  fetchUsers: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function loadData(store) {
  return store.dispatch(userActions.fetchUsers());
}


export default {
  component: connect(mapStateToProps, { fetchUsers: userActions.fetchUsers })(UsersListPage),
  loadData,
};
