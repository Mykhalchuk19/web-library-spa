import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { CustomInput, CustomButton } from '../../components';
import { userActions } from '../../state/user';
import rules from './rules';
import './style.sass';

export interface Values {
    username: string;
    password: string;
}

interface Props {
    initialValues?: Values;
    validateOnChange?: boolean;
    onSubmit?: (v: Values) => Promise<unknown>
}

const useStyles = makeStyles({
  signin__wrapper: {
    width: 'auto',
    maxWidth: '400px',
    margin: '0 auto',
  },
  signin__btn: {
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
      password: '',
    },
    validateOnChange: false,
    validationSchema: rules,
    enableReinitialize: true,
    onSubmit: (formValues) => {
      dispatch(userActions.userSignInRequest(formValues));
      setSubmitting(true);
    },
  });
  const classes = useStyles();
  return (
    <Paper
      elevation={3}
      className={classes.signin__wrapper}
    >
      <form onSubmit={handleSubmit} className="signin__form">
        <div className="signin__header">
          <h2 className="signin__title">Sign In</h2>
        </div>
        <div className="signin__body">
          <div className="signin__row">
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
          <div className="signin__row">
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
          <div className="signin__row">
            <CustomButton
              type="submit"
              className={classes.signin__btn}
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
