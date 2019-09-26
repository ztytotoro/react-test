import React from 'react';
import { ControlWrapper } from './controlWrapper';
import { ControlOptions, Control } from './types';

interface Props {
  height: number;
  width: number;
  controls: ControlOptions[];
}

const controlMap = {} as {
  [key: string]: React.FC;
};

export const MimicRuntime: React.FC<Props> = ({ height, width, controls }) => {
  return (
    <div
      style={{
        height: height + 'px',
        width: width + 'px',
        position: 'relative'
      }}
    >
      {controls.map((control, index) => {
        const Control = controlMap[control.type];
        return (
          <ControlWrapper
            height={control.height}
            width={control.width}
            x={control.x}
            y={control.y}
            key={index}
          >
            <Control {...control.props}></Control>
          </ControlWrapper>
        );
      })}
    </div>
  );
};

export function registerControl(controls: Control[]) {
  controls.forEach(c => (controlMap[c.type] = c.render));
}
