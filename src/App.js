import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/Navigation';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomePage = lazy(() => import('./views/HomePage'));
const ContactsPage = lazy(() => import('./views/ContactsPage'));
const RegisterPage = lazy(() => import('./views/RegisterPage'));
const LoginPage = lazy(() => import('./views/LoginPage'));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(authOperations.getCurrentUser()), [dispatch]);
  return (
    <div>
      <AppBar />
      <Suspense fallback={<p>Загружаем...</p>}>
        <Switch>
          <PublicRoute exact path="/" component={HomePage} />
          <PrivateRoute
            path="/contacts"
            redirectTo="/login"
            component={ContactsPage}
          />
          <PublicRoute
            path="/login"
            restricted
            redirectTo="/contacts"
            component={LoginPage}
          />
          <PublicRoute
            path="/register"
            restricted
            redirectTo="/contacts"
            component={RegisterPage}
          />
          <Route
            render={() => (
              <div style={{ textAlign: 'center' }}>Page not found :(</div>
            )}
          />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
