const getIsAuthenticated = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getUserEmail = state => state.auth.user.email;

const selectors = {
  getIsAuthenticated,
  getUsername,
  getUserEmail,
};

export default selectors;
