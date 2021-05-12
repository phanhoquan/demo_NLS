// @flow
// libs
import React, { memo } from 'react';

type Props = {
  size?: string,
  variant?: string
};

export const LoadingSmall = ({ size = 'sm', variant = 'warning' }: Props) => (
  <div animation="border" variant={variant} size={size} />
);

LoadingSmall.defaultProps = {
  size: 'sm',
  variant: 'warning'
};

export default memo<Props>(LoadingSmall);
