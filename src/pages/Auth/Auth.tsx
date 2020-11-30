import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, ChangeLanguage } from '../../components';
import {
  SignUpForm, SignInForm, ActivateAccount, ForgotPassword, ResetPassword,
} from '../../containers';
import logo from '../../assets/fisfm.png';

const Auth: React.FC = () => (
  <>
    <Header />
    <div className="logo__wrapper">
      <img src={logo} alt="Logo_fitm" className="logo__img" />
    </div>
    <Switch>
      <Route exact path="/auth/signup/" component={SignUpForm} />
      <Route exact path="/auth/signin/" component={SignInForm} />
      <Route exact path="/auth/activate-account/:id/:code" component={ActivateAccount} />
      <Route exact path="/auth/forgot-password" component={ForgotPassword} />
      <Route exact path="/auth/reset-password/:id/:code" component={ResetPassword} />
      <Route path="/" component={SignUpForm} />
    </Switch>
    <ChangeLanguage />
  </>
);

export default Auth;
