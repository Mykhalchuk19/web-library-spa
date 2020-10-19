import React, { memo } from 'react';
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { isEmpty } from 'ramda';
// eslint-disable-next-line react/require-default-props
type BProps = {
    type?: 'submit' | 'reset' | 'button';
    onClick?: () => void | CallableFunction;
    children?: React.ReactNode;
    className?: string,
    text: string,
}

const CustomButton: React.FC<BProps> = ({
  children, type, onClick, className, text,
}: BProps) => {
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
