import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { CustomButton } from '../../components';
import { userActions } from '../../state/user';

const ProfileContainer: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <>
      <Layout>
        <div>Welcome, pidar</div>
        <CustomButton
          type="button"
          onClick={() => {
            localStorage.removeItem('authToken');
            dispatch(userActions.userLogOut());
            history.push('/');
          }}
        >
          Log out
        </CustomButton>
      </Layout>
    </>
  );
};

export default ProfileContainer;
