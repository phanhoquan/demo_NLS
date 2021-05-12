// @flow
// libs
import React, { memo } from 'react';

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
    <button
      variant={variant}
      type={type}
      size={size}
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
};

PrimaryButton.defaultProps = {
  disabled: false,
  className: '',
  size: 'sm',
  type: 'button',
  variant: 'primary'
};

export default memo<Props>(PrimaryButton);
