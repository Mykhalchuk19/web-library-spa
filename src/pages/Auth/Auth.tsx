import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from '../../components';
import { SignUpForm, SignInForm, ActivateAccount } from '../../containers';

const Auth: React.FC = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/auth/signup/" component={SignUpForm} />
      <Route exact path="/auth/signin/" component={SignInForm} />
      <Route exact path="/auth/activate-account/:id/:code" component={ActivateAccount} />
      <Route path="/" component={SignUpForm} />
    </Switch>
  </>
);

export default Auth;
