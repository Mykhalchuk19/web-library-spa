import React from 'react';
import { NavLink } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Form, CustomButton } from '../../components';
import { authActions, authSelectors } from '../../state/auth';
import { SignInProps, SignInValues } from '../../interfaces/authInterfaces';
import rules from './rules';

const useStyles = makeStyles({
  signin__wrapper: {
    width: 'auto',
    maxWidth: '400px',
    margin: '0 auto',
  },
  signin__btn: {
    marginBottom: '10px',
  },
  signin__link: {
    marginTop: '10px',
  },
});

const SignUpForm: React.FC<SignInProps> = () => {
  const dispatch = useDispatch();
  const isPending = useSelector(authSelectors.getPending);
  const { t } = useTranslation(['auth', 'common']);
  const {
    handleSubmit,
    values,
    errors,
    handleChange,
    setSubmitting,
    isSubmitting,
  } = useFormik<SignInValues>({
    initialValues: {
      username: '',
      password: '',
    },
    validateOnChange: false,
    validationSchema: rules,
    enableReinitialize: true,
    onSubmit: (formValues) => {
      dispatch(authActions.userSignInRequest(formValues));
      setSubmitting(isPending);
    },
  });
  const classes = useStyles();
  return (
    <>
      <Paper
        elevation={3}
        className={classes.signin__wrapper}
      >
        <form className="auth__form" onSubmit={handleSubmit}>
          <div className="auth__header">
            <h2 className="auth__title">{t('Sign In')}</h2>
          </div>
          <div className="auth__body">
            <div className="auth__row">
              <Form.CustomInput
                id="username"
                label={t('Username')}
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
                id="password"
                label={t('Password')}
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
              <CustomButton
                type="submit"
                className={classes.signin__btn}
                text={t('Submit')}
              />
              <NavLink
                to="/auth/signup"
                className="auth__link"
              >
                {t('I`m not signed up yet')}
              </NavLink>
            </div>
          </div>
        </form>
      </Paper>
      <NavLink
        to="/auth/forgot-password"
        className="auth__link auth__forgot-password"
      >
        {t('I don\'t remember password')}
      </NavLink>
    </>
  );
};

export default SignUpForm;
