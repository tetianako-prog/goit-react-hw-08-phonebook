import React from 'react';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import UserMenu from './UserMenu';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const AppBar = ({ isAuthenticated }) => (
  <Navbar bg="primary" variant="dark">
    <Container fluid="xl">
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </Container>
  </Navbar>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
