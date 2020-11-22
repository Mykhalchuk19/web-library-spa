import React, { memo } from 'react';
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { isEmpty } from 'ramda';
import { makeStyles } from '@material-ui/core/styles';
import { Button as ButtonTypes } from '../../interfaces/componentInterfaces';
import './style.sass';

const useStyles = makeStyles({
  custom__button: {
    minHeight: '36.5px',
  },
});

const CustomButton: React.FC<ButtonTypes> = ({
  children, type, onClick, className, text, pending,
}: ButtonTypes) => {
  const { t } = useTranslation(['common']);
  const classes = useStyles();
  return (
    <Button
      type={type || 'submit'}
      className={`${classes.custom__button} ${className}`}
      onClick={onClick}
      variant="contained"
      color="primary"
    >
      {/* eslint-disable-next-line no-nested-ternary */}
      {pending ? (
        <div className="button__loader">
          <div className="button__circle" />
        </div>
      ) : !isEmpty(text) ? t(text) : children}
    </Button>
  );
};

export default memo(CustomButton);
