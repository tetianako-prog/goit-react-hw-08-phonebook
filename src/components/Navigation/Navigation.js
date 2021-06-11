import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

function Navigation() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
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
export default Navigation;
