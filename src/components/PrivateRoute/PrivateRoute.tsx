import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { TPrivateRoute } from '../../interfaces/componentInterfaces';

const PrivateRoute: React.FC<TPrivateRoute> = ({
  component: Component, exact, path, ...props
}: TPrivateRoute) => {
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
