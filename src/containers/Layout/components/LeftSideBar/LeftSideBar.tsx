import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './style.sass';
import { userActions } from '../../../../state/user';
import { CustomButton } from '../../../../components';

const LeftSideBar: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <>
      <aside className="left-sidebar">
        <Navigation />
        <div className="left-sidebar__log-out">
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
        </div>
        <div className="left-sidebar__copyright">
          <p className="left-sidebar__copyright--text">Created by Mykhalchuk Yaroslav</p>
        </div>
      </aside>
    </>
  );
};

export default LeftSideBar;
