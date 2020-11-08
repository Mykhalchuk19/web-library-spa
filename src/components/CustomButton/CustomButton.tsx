import React, { memo } from 'react';
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { isEmpty } from 'ramda';
import { Button as ButtonTypes } from '../../interfaces/componentInterfaces';

const CustomButton: React.FC<ButtonTypes> = ({
  children, type, onClick, className, text,
}: ButtonTypes) => {
  const { t } = useTranslation(['common']);
  return (
    <Button
      type={type || 'submit'}
      className={`custom__button ${className}`}
      onClick={onClick}
      variant="contained"
      color="primary"
    >
      {!isEmpty(text) ? t(text) : children}
    </Button>
  );
};

export default memo(CustomButton);
