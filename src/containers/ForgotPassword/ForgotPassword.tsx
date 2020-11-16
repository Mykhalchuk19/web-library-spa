import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { CustomButton, Form } from '../../components';
import { TForgotPasswordValues } from '../../interfaces/authInterfaces';
import rules from './rules';
import { userActions } from '../../state/user';

const useStyles = makeStyles({
  forgot_password__wrapper: {
    width: 'auto',
    maxWidth: '400px',
    margin: '0 auto',
  },
  forgot_password__btn: {
    marginBottom: '10px',
  },
  forgot_password__link: {
    marginTop: '10px',
  },
});

const ForgotPassword: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { t } = useTranslation(['auth']);
  const {
    handleSubmit,
    values,
    errors,
    handleChange,
    isSubmitting,
  } = useFormik<TForgotPasswordValues>({
    initialValues: {
      email: '',
    },
    validateOnChange: false,
    validationSchema: rules,
    enableReinitialize: true,
    onSubmit: (formValues) => {
      dispatch(userActions.forgotPasswordRequest(formValues));
    },
  });
  return (
    <Paper
      elevation={3}
      className={classes.forgot_password__wrapper}
    >
      <form className="auth__form" onSubmit={handleSubmit}>
        <div className="auth__header">
          <h2 className="auth__title">{t('I don\'t remember password')}</h2>
        </div>
        <div className="auth__body">
          <div className="auth__row">
            <Form.CustomInput
              id="Email"
              label={t('Email')}
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
            <CustomButton
              type="submit"
              className={classes.forgot_password__btn}
              text={t('Submit')}
            />
            <NavLink
              to="/auth/signin"
              className="auth__link"
            >
              {t('Sign In')}
            </NavLink>
          </div>
        </div>
      </form>
    </Paper>
  );
};

export default ForgotPassword;
