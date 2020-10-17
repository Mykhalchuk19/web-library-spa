import React from 'react';
import { NavLink } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { Form, CustomButton } from '../../components';
import { userActions, userSelectors } from '../../state/user';
import rules from './rules';
import './style.sass';

export interface Values {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

interface Props {
    initialValues?: Values;
    validateOnChange?: boolean;
    onSubmit?: (v: Values) => Promise<void>
}

const useStyles = makeStyles({
  signup__wrapper: {
    width: 'auto',
    maxWidth: '400px',
    margin: '0 auto',
  },
  signup__btn: {
    marginBottom: '10px',
  },
});

const SignUpForm: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const isPending = useSelector(userSelectors.getAuthPending);
  const {
    handleSubmit,
    values,
    errors,
    handleChange,
    setSubmitting,
    isSubmitting,
  } = useFormik<Values>({
    initialValues: {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    },
    validateOnChange: false,
    validationSchema: rules,
    enableReinitialize: true,
    onSubmit: (formValues) => {
      dispatch(userActions.userSignUpRequest(formValues));
      setSubmitting(isPending);
    },
  });
  const classes = useStyles();
  return (
    <Paper
      elevation={3}
      className={classes.signup__wrapper}
    >
      <form className="signup__form" onSubmit={handleSubmit}>
        <div className="signup__header">
          <h2 className="signup__title">Sign Up</h2>
        </div>
        <div className="signup__body">
          <div className="signup__row">
            <Form.CustomInput
              id="username"
              label="Username"
              error={errors.username || ''}
              inputProps={{
                name: 'username',
                disabled: isSubmitting,
                onChange: handleChange,
                value: values.username,
              }}
            />
          </div>
          <div className="signup__row">
            <Form.CustomInput
              id="firstname"
              label="First name"
              error={errors.firstname || ''}
              inputProps={{
                name: 'firstname',
                disabled: isSubmitting,
                onChange: handleChange,
                value: values.firstname,
              }}
            />
          </div>
          <div className="signup__row">
            <Form.CustomInput
              id="lastname"
              label="Last name"
              error={errors.lastname || ''}
              inputProps={{
                name: 'lastname',
                disabled: isSubmitting,
                onChange: handleChange,
                value: values.lastname,
              }}
            />
          </div>
          <div className="signup__row">
            <Form.CustomInput
              id="email"
              label="Email"
              error={errors.email || ''}
              inputProps={{
                name: 'email',
                disabled: isSubmitting,
                onChange: handleChange,
                value: values.email,
              }}
            />
          </div>
          <div className="signup__row">
            <Form.CustomInput
              id="password"
              label="Password"
              error={errors.password || ''}
              inputProps={{
                name: 'password',
                disabled: isSubmitting,
                onChange: handleChange,
                value: values.password,
                type: 'password',
              }}
            />
          </div>
          <div className="signup__row">
            <CustomButton
              type="submit"
              className={classes.signup__btn}
            >
              Submit
            </CustomButton>
            <NavLink
              to="/auth/signin"
              className="signup__link"
            >
              I already sign in
            </NavLink>
          </div>
        </div>
      </form>
    </Paper>
  );
};

export default SignUpForm;
