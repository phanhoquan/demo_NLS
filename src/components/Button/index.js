// @flow
// libs
import React, { memo } from 'react';
import { Button } from 'react-bootstrap';

type Props = {
  onClick: Function,
  disabled?: boolean,
  size?: string,
  variant?: string,
  type: string,
  customClass?: string,
  children: any
};

export const PrimaryButton = ({
  disabled = false,
  onClick,
  variant = 'primary',
  type,
  size = 'sm',
  customClass = '',
  children
}: Props) => {
  return (
    <Button
      variant={variant}
      type={type}
      size={size}
      disabled={disabled}
      onClick={onClick}
      className={customClass}
    >
      {children}
    </Button>
  );
};

PrimaryButton.defaultProps = {
  disabled: false,
  customClass: '',
  size: 'sm',
  variant: 'primary'
};

export default memo<Props>(Button);
