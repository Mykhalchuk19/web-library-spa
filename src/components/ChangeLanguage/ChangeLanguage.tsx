import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import { LANGUAGES } from '../../constants';
import { ukFlag, ukraineFlag } from '../../assets/flags';
import useChangeLanguage from './useChangeLanguage';
import './style.sass';

const useStyles = makeStyles({
  icon_button: {
    width: '70px',
  },
});

const ChangeLanguage: React.FC = () => {
  const classes = useStyles();
  const { changeLanguage } = useChangeLanguage();
  return (
    <div className="change-language">
      <div className="change-language__wrapper">
        <IconButton className={classes.icon_button} onClick={() => changeLanguage(LANGUAGES.uk)}>
          <img src={ukraineFlag} alt="Ukraine" className="change-languages--ua" />
        </IconButton>
        <IconButton className={classes.icon_button} onClick={() => changeLanguage(LANGUAGES.en)}>
          <img src={ukFlag} alt="United Kingdom" className="change-languages--uk" />
        </IconButton>
      </div>
    </div>
  );
};

export default ChangeLanguage;
