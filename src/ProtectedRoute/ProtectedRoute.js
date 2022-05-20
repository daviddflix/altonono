import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from '../Component/spinner/spinner';

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      returnTo: () => window.location.hash.substr(1)
    })}
    {...args}
  />
);

export default ProtectedRoute;