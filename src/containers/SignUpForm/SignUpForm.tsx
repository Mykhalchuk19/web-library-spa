import React from 'react';
import { NavLink } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Form, CustomButton } from '../../components';
import { SignUpProps, SignUpValues } from '../../interfaces/authInterfaces';
import rules from './rules';
import { authActions, authSelectors } from '../../state/auth';

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

const SignUpForm: React.FC<SignUpProps> = () => {
  const dispatch = useDispatch();
  const isPending = useSelector(authSelectors.getPending);
  const { t } = useTranslation(['auth']);
  const {
    handleSubmit,
    values,
    errors,
    handleChange,
    setSubmitting,
    isSubmitting,
  } = useFormik<SignUpValues>({
    initialValues: {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirm_password: '',
    },
    validateOnChange: false,
    validationSchema: rules,
    enableReinitialize: true,
    onSubmit: (formValues) => {
      dispatch(authActions.userSignUpRequest(formValues));
      setSubmitting(isPending);
    },
  });
  const classes = useStyles();
  return (
    <Paper
      elevation={3}
      className={classes.signup__wrapper}
    >
      <form className="auth__form" onSubmit={handleSubmit}>
        <div className="auth__header">
          <h2 className="auth__title">{t('Sign Up')}</h2>
        </div>
        <div className="auth__body">
          <div className="auth__row">
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
          <div className="auth__row">
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
          <div className="auth__row">
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
          <div className="auth__row">
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
          <div className="auth__row">
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
          <div className="auth__row">
            <Form.CustomInput
              id="confirm_password"
              label="Confirm password"
              error={errors.confirm_password || ''}
              inputProps={{
                name: 'confirm_password',
                disabled: isSubmitting,
                onChange: handleChange,
                value: values.confirm_password,
                type: 'password',
              }}
            />
          </div>
          <div className="auth__row">
            <CustomButton
              type="submit"
              className={classes.signup__btn}
              text="Submit"
            />
            <NavLink
              to="/auth/signin"
              className="auth__link"
            >
              {t('I already signed up')}
            </NavLink>
          </div>
        </div>
      </form>
      <NavLink
        to="/auth/forgot-password"
        className="auth__link auth__forgot-password"
      >
        {t('I don\'t remember password')}
      </NavLink>
    </Paper>
  );
};

export default SignUpForm;
