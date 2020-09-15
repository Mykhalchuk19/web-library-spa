import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { CustomInput, CustomButton } from '../../components';
import { userActions } from '../../state/user';
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
    onSubmit?: (v: Values) => Promise<unknown>
}

const useStyles = makeStyles({
  signup__wrapper: {
    width: 'auto',
    maxWidth: '400px',
    margin: '0 auto',
  },
  signup__btn: {
    margin: '0 auto 10px',
  },
});

const SignUpForm: React.FC<Props> = (Props) => {
  const dispatch = useDispatch();
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
      setSubmitting(true);
    },
  });
  const classes = useStyles();
  return (
    <Paper
      elevation={3}
      className={classes.signup__wrapper}
    >
      <form onSubmit={handleSubmit} className="signup__form">
        <div className="signup__header">
          <h2 className="signup__title">Sign Up</h2>
        </div>
        <div className="signup__body">
          <div className="signup__row">
            <CustomInput
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
            <CustomInput
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
            <CustomInput
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
            <CustomInput
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
            <CustomInput
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
          </div>
        </div>
      </form>
    </Paper>
  );
};

export default SignUpForm;
