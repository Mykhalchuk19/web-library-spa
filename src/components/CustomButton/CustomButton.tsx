import React from 'react';
import { Button } from '@material-ui/core';

type BProps = {
    type?: 'submit' | 'reset' | 'button';
    onClick?: () => void;
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

export default CustomButton;
