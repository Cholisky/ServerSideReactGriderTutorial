import React from 'react';
import { renderRoutes } from 'react-router-config';
import ReactRouterPropTypes from 'react-router-prop-types';
import { authActions } from './actions';
import Header from './components/Header';

const App = ({ route }) => (
  <div>
    <Header />
    {renderRoutes(route.routes)}
  </div>
);

App.propTypes = {
  route: ReactRouterPropTypes.route.isRequired,
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(authActions.fetchCurrentUser()),
};
