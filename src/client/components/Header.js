import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({ auth }) => {
  // eslint-disable-next-line react/jsx-curly-brace-presence
  const authButton = auth ? <a href={'/api/logout'}> Logout</a> : <a href={'/api/auth/google'}>Login</a>;

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">React SSR</Link>
        <ul className="right">
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/admins">Admins</Link></li>
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
