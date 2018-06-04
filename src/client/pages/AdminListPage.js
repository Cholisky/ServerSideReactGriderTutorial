import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { adminActions } from '../actions';
import requireAuth from '../components/hocs/requireAuth';

class AdminListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map(admin => <li key={admin.id}>{admin.name}</li>);
  }

  render() {
    return (
      <div>
        <h3>Protected list of admins</h3>
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

AdminListPage.propTypes = {
  admins: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })),
    PropTypes.array.isRequired,
  ]).isRequired,
  fetchAdmins: PropTypes.func.isRequired,
};

function mapStateToProps({ admins }) {
  return { admins };
}

function loadData(store) {
  return store.dispatch(adminActions.fetchAdmins());
}

export default {
  component: connect(mapStateToProps, { fetchAdmins: adminActions.fetchAdmins })(requireAuth(AdminListPage)),
  loadData,
};
