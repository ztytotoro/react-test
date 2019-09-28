import _React from 'react';
import { ContainerOptions } from './types';
import { importReact } from './react';
const { React } = importReact();

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
