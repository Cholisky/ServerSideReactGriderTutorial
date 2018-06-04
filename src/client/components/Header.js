import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/network_constants';

const Header = ({ auth }) => {
  const authButton = auth ? <a href={ROUTES.LOGOUT}> Logout</a> : <a href={ROUTES.LOGIN}>Login</a>;

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={ROUTES.HOME} className="brand-logo">React SSR</Link>
        <ul className="right">
          <li><Link to={ROUTES.USERS}>Users</Link></li>
          <li><Link to={ROUTES.ADMINS}>Admins</Link></li>
          <li>{authButton}</li>
        </ul>
      </div>
    </nav>
  );
};

Header.propTypes = {
  auth: PropTypes.oneOfType([
    PropTypes.shape({
      _id: PropTypes.string,
      googleId: PropTypes.string,
      __v: PropTypes.number,
    }),
    PropTypes.bool,
  ]).isRequired,
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
