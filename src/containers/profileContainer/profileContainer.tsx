import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../Layout/Layout';
import { Form, CustomButton } from '../../components';
import useProfile from './useProfile';
import './style.sass';

const useStyles = makeStyles({
  profile__btn: {
    width: '100%',
  },
});

const ProfileContainer: React.FC = () => {
  const {
    handleSubmit,
    values,
    errors,
    handleChange,
    isSubmitting,
  } = useProfile();

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
