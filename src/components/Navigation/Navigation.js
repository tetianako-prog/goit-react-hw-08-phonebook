import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

function Navigation({ isAuthenticated }) {
  return (
    <Nav>
      <NavLink to="/" exact className="nav-link">
        Home
      </NavLink>

      {isAuthenticated && (
        <NavLink to="/contacts" exact className="nav-link">
          Contacts
        </NavLink>
      )}
    </Nav>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
