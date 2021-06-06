import React from 'react';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import Button from 'react-bootstrap/Button';

const UserMenu = ({ email, onLogout }) => (
  <div>
    <span style={{ color: 'rgb(255,255,255)', marginRight: '10px' }}>
      {email}
    </span>
    <Button type="button" variant="light" onClick={onLogout}>
      Logout
    </Button>
  </div>
);

const mapStateToProps = state => ({
  email: authSelectors.getUserEmail(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
