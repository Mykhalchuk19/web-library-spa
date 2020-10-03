import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Header } from '../../components';
import { SignUpForm, SignInForm } from '../../containers';
import 'react-toastify/dist/ReactToastify.css';
import ModalWindow from '../../components/ModalWindow/ModalWindow';

const Auth: React.FC = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/auth/signup/" component={SignUpForm} />
      <Route exact path="/auth/signin/" component={SignInForm} />
      <Route path="/" component={SignUpForm} />
    </Switch>
    <ToastContainer />
  </>
);

export default Auth;
