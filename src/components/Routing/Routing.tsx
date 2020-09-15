import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect, useLocation,
} from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { Auth } from '../../pages';

const Routing: React.FC = () => {
  const location = useLocation();
  const fixUrl = () => (location.pathname.slice(-1) !== '/' ? <Redirect to={`${location.pathname}/`} /> : <></>);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact strict path="/:url" render={fixUrl} />
        <Route path="/auth/" component={Auth} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routing;
