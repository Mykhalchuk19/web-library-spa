import React from 'react';
import { IconButton } from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Navigation from '../Navigation/Navigation';
import './style.sass';
import { CustomButton } from '../../../../components';
import { ukFlag, ukraineFlag } from '../../../../assets/flags';
import UseLeftSideBar from './useLeftSidebar';
import { LANGUAGES } from '../../../../constants';

const useStyles = makeStyles({
  leftsidebar_toggle_btn: {
    position: 'absolute',
    right: '2px',
    padding: '0px',
    top: '15px',
    zIndex: 999,
  },
  leftsidebar_toggle_btn_icon: {
    color: 'white',
    height: '20px',
  },
});

const LeftSideBar: React.FC = () => {
  const {
    logOut, changeLanguage, toggleLeftSideBar, isLeftSideBar,
  } = UseLeftSideBar();
  const classes = useStyles();
  return (
    <>
      <aside className={`left-sidebar ${!isLeftSideBar ? 'left-sidebar__hide' : ''}`}>
        <div className="left-sidebar__wrapper">
          <IconButton
            onClick={toggleLeftSideBar}
            type="button"
            className={classes.leftsidebar_toggle_btn}
          >
            {!isLeftSideBar ? (
              <ArrowForwardIos
                className={classes.leftsidebar_toggle_btn_icon}
              />
            ) : (
              <ArrowBackIos
                className={classes.leftsidebar_toggle_btn_icon}
              />
            )}
          </IconButton>
          <Navigation isLeftSideBar={!isLeftSideBar} />
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
        </div>
      </aside>
    </>
  );
};

export default LeftSideBar;
