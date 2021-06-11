import React from 'react';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import UserMenu from './UserMenu';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const AppBar = () => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <Navbar bg="primary" variant="dark">
      <Container fluid="xl">
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </Container>
    </Navbar>
  );
};

export default AppBar;
