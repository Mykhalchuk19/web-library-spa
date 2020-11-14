import React, { Suspense, lazy } from 'react';
import {
  Switch, Route, Redirect, useLocation,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Loader from '../Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';

const Auth = lazy(() => import('../../pages/Auth/Auth'));
const Profile = lazy(() => import('../../pages/Profile/Profile'));
const ErrorPage = lazy(() => import('../../pages/ErrorPage/ErrorPage'));
const Users = lazy(() => import('../../pages/Users/Users'));
const Categories = lazy(() => import('../../pages/Categories/Categories'));

const Routing: React.FC = () => {
  const location = useLocation();
  const fixUrl = () => (location.pathname.slice(-1) !== '/' ? <Redirect to={`${location.pathname}/`} /> : <></>);
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact strict path="/:url" render={fixUrl} />
        <Route path="/auth/" component={Auth} />
        <PrivateRoute exact path="/categories" component={Categories} />
        <PrivateRoute exact path="/users" component={Users} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/" component={Profile} />
        <PrivateRoute exact path="*" component={ErrorPage} />
      </Switch>
      <ToastContainer />
    </Suspense>
  );
};

export default Routing;
