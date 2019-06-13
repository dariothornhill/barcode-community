import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ ...props }) => {
  const [currentUser] = useContext(AuthContext);
  console.log('logged in user is', currentUser);
  return currentUser ? <Route {...props} /> : <Redirect to='/login' />;
};

export default PrivateRoute;
