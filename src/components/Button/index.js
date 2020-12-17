// @flow
// libs
import React, { memo } from 'react';
import { Button } from 'react-bootstrap';

type Props = {
  onClick: Function,
  disabled?: boolean,
  size?: string,
  variant?: string,
  type?: string,
  className?: string,
  children: any
};

export const PrimaryButton = ({
  disabled = false,
  onClick,
  variant = 'primary',
  type = 'button',
  size = 'sm',
  className = '',
  children
}: Props) => {
  return (
    <Button
      variant={variant}
      type={type}
      size={size}
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      {children}
    </Button>
  );
};

PrimaryButton.defaultProps = {
  disabled: false,
  className: '',
  size: 'sm',
  type: 'button',
  variant: 'primary'
};

export default memo<Props>(Button);
