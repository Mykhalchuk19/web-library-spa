import React from 'react';
import { Paper } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CustomButton, Form } from '../../components';
import { TResetPasswordValues } from '../../interfaces/authInterfaces';
import { userActions } from '../../state/user';
import rules from './rules';
import './style.sass';

const useStyles = makeStyles({
  reset_password__wrapper: {
    width: 'auto',
    maxWidth: '400px',
    margin: '0 auto',
  },
  reset_password__btn: {
    marginBottom: '10px',
  },
});

const ResetPassword: React.FC = () => {
  const dispatch = useDispatch();
  const { id, code } = useParams();
  const { t } = useTranslation('auth');
  const classes = useStyles();
  const {
    handleSubmit,
    values,
    errors,
    handleChange,
    isSubmitting,
  } = useFormik<TResetPasswordValues>({
    initialValues: {
      password: '',
      confirm_password: '',
    },
    validateOnChange: false,
    validationSchema: rules,
    enableReinitialize: true,
    onSubmit: (formValues) => {
      dispatch(userActions.resetPasswordRequest({ id, code, ...formValues }));
    },
  });
  return (
    <Paper
      elevation={3}
      className={classes.reset_password__wrapper}
    >
      <form className="reset-password__form" onSubmit={handleSubmit}>
        <div className="reset-password__header">
          <h2 className="reset-password__title">{t('Reset password')}</h2>
        </div>
        <div className="reset-password__body">
          <div className="reset-password__row">
            <Form.CustomInput
              id="password"
              label="New password"
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
          <div className="reset-password__row">
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
          <div className="reset-password__row">
            <CustomButton
              type="submit"
              className={classes.reset_password__btn}
              text="Submit"
            />
          </div>
        </div>
      </form>
    </Paper>
  );
};

export default ResetPassword;
