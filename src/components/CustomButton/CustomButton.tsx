import React, { memo } from 'react';
import { Button } from '@material-ui/core';
// eslint-disable-next-line react/require-default-props
type BProps = {
    type?: 'submit' | 'reset' | 'button';
    onClick?: () => void | CallableFunction;
    children: React.ReactNode;
    className?: string,
}

const CustomButton: React.FC<BProps> = ({
  children, type, onClick, className,
}: BProps) => (
  <Button
    type={type || 'submit'}
    className={`custom__button ${className}`}
    onClick={onClick}
    variant="contained"
    color="primary"
  >
    {children}
  </Button>
);

export default memo(CustomButton);
