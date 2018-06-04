/* eslint-disable react/require-default-props,react/prefer-stateless-function */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../../../constants/network_constants';

export default (ChildComponent) => {
  class RequireAuth extends Component {
    render() {
      switch (this.props.auth) {
        case false:
          return <Redirect to={ROUTES.NO_AUTH} />;
        case null:
          return <div>Loading...</div>;
        default:
          return <ChildComponent {...this.props} />;
      }
    }
  }

  // Since it's possible for ChildComponent to be undefined and auth to be null,
  // I've disabled mandatory defaults for these props
  RequireAuth.propTypes = {
    ChildComponent: PropTypes.func,
    auth: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object,
    ]),
  };

  function mapStateToProps({ auth }) {
    return { auth };
  }

  return connect(mapStateToProps)(RequireAuth);
};
