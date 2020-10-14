import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../Layout/Layout';
import { Form, CustomButton } from '../../components';
import { userActions, userSelectors } from '../../state/user';
import rules from './rules';
import './style.sass';

export interface Values {
    username: string,
    firstname: string,
    lastname: string,
    email: string,
}

interface Props {
    initialValues?: Values;
    validateOnChange?: boolean;
    onSubmit?: (v: Values) => Promise<void>
}

const useStyles = makeStyles({
  profile__btn: {
    width: '100%',
  },
});

const ProfileContainer: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelectors.getUserData);
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
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
    },
    validateOnChange: false,
    validationSchema: rules,
    enableReinitialize: true,
    onSubmit: (formValues) => {
      dispatch(userActions.userUpdateRequest({ ...formValues }, { id: user.id }));
      setSubmitting(!isPending);
    },
  });
  const classes = useStyles();
  return (
    <Layout>
      <form className="profile__form" onSubmit={handleSubmit}>
        <div className="profile__header">
          <h2 className="profile__title">Profile</h2>
        </div>
        <div className="profile__body">
          <div className="profile__row">
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
          <div className="profile__row">
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
          <div className="profile__row">
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
          <div className="profile__row">
            <Form.CustomInput
              id="email"
              label="Email"
              error={errors.email || ''}
              inputProps={{
                name: 'firstname',
                disabled: isSubmitting,
                onChange: handleChange,
                value: values.email,
                type: 'email',
              }}
            />
          </div>
          <div className="profile__row">
            <CustomButton
              type="submit"
              className={classes.profile__btn}
            >
              Save
            </CustomButton>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default ProfileContainer;
