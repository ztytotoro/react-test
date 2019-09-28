import _React from 'react';
import { ContainerOptions } from './types';

const React = globalThis.React || _React;

export const ControlWrapper: React.FC<ContainerOptions> = ({
  height,
  width,
  x,
  y,
  children
}) => {
  return (
    <div
      style={{
        height: height,
        width: width,
        position: 'absolute',
        left: x,
        top: y,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {children}
    </div>
  );
};
