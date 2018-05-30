import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userActions } from '../actions';

class UsersList extends Component {
  componentDidMount() {
    this.props.actions.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => <li key={user.id}>{user.name}</li>);
  }

  render() {
    return (
      <div>
        Here is a big list of users:
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })),
  actions: PropTypes.shape({
    fetchUsers: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      fetchUsers: userActions.fetchUsers,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
