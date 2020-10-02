import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { IPrivateRoute } from './interfaces';

const PrivateRoute: React.FC<IPrivateRoute> = ({
  component: Component, exact, path, ...props
}: IPrivateRoute) => {
  const location = useLocation();
  return (
    localStorage.getItem('authToken') ? (
      <Route exact={exact} path={path}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...props} />
      </Route>
    ) : (
      <Redirect to={{
        pathname: '/auth/signin',
        state: { from: location },
      }}
      />
    )
  );
};

export default PrivateRoute;
