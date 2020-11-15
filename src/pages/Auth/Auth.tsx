import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from '../../components';
import {
  SignUpForm, SignInForm, ActivateAccount, ForgotPassword, ResetPassword,
} from '../../containers';

const Auth: React.FC = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/auth/signup/" component={SignUpForm} />
      <Route exact path="/auth/signin/" component={SignInForm} />
      <Route exact path="/auth/activate-account/:id/:code" component={ActivateAccount} />
      <Route exact path="/auth/forgot-password" component={ForgotPassword} />
      <Route exact path="/auth/reset-password/:id/:code" component={ResetPassword} />
      <Route path="/" component={SignUpForm} />
    </Switch>
  </>
);

export default Auth;
