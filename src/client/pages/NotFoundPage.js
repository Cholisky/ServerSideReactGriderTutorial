import PropTypes from 'prop-types';
import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  // eslint-disable-next-line no-param-reassign
  staticContext.notFound = true;
  return (
    <h2>Ooops, route not found.</h2>
  );
};

NotFoundPage.defaultProps = {
  staticContext: {},
};

NotFoundPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  staticContext: PropTypes.object,
};

export default {
  component: NotFoundPage,
};
