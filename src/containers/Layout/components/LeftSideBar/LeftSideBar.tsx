import React from 'react';
import { IconButton } from '@material-ui/core';
import Navigation from '../Navigation/Navigation';
import './style.sass';
import { CustomButton } from '../../../../components';
import { ukFlag, ukraineFlag } from '../../../../assets/flags';
import UseLeftSideBar from './useLeftSidebar';
import { LANGUAGES } from '../../../../constants';

const LeftSideBar: React.FC = () => {
  const { logOut, changeLanguage } = UseLeftSideBar();
  return (
    <>
      <aside className="left-sidebar">
        <Navigation />
        <div className="left-sidebar__log-out">
          <CustomButton
            type="button"
            onClick={logOut}
            text="Log out"
          />
        </div>
        <div className="left-sidebar__copyright">
          <p className="left-sidebar__copyright--text">Created by Mykhalchuk Yaroslav</p>
        </div>
        <div className="left-sidebar__languages">
          <IconButton onClick={() => changeLanguage(LANGUAGES.uk)}>
            <img src={ukraineFlag} alt="Ukraine" className="left-sidebar__languages--ua" />
          </IconButton>
          <IconButton onClick={() => changeLanguage(LANGUAGES.en)}>
            <img src={ukFlag} alt="United Kingdom" className="left-sidebar__languages--uk" />
          </IconButton>
        </div>
      </aside>
    </>
  );
};

export default LeftSideBar;
