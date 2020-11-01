import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from '../../components';
import { SignUpForm, SignInForm } from '../../containers';

const Auth: React.FC = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/auth/signup/" component={SignUpForm} />
      <Route exact path="/auth/signin/" component={SignInForm} />
      <Route path="/" component={SignUpForm} />
    </Switch>
  </>
);

export default Auth;
