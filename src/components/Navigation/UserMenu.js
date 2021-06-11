import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import Button from 'react-bootstrap/Button';

const UserMenu = () => {
  const email = useSelector(authSelectors.getUserEmail);
  const dispatch = useDispatch();
  const onLogout = useCallback(
    () => dispatch(authOperations.logOut()),
    [dispatch],
  );
  return (
    <div>
      <span style={{ color: 'rgb(255,255,255)', marginRight: '10px' }}>
        {email}
      </span>
      <Button type="button" variant="light" onClick={onLogout}>
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
