// @flow
// libs
import React, { memo } from 'react';
import { Spinner } from 'react-bootstrap';

type Props = {
  size?: string,
  variant?: string
};

export const LoadingSmall = ({ size = 'sm', variant = 'warning' }: Props) => (
  <Spinner animation="border" variant={variant} size={size} />
);

LoadingSmall.defaultProps = {
  size: 'sm',
  variant: 'warning'
};

export default memo<Props>(LoadingSmall);
