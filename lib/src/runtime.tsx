import _React from 'react';
import { ControlWrapper } from './controlWrapper';
import { ControlOptions, Control } from './types';
import { size } from './utils';
import _ReactDOM from 'react-dom';

const React = globalThis.React || _React;
const ReactDOM = globalThis.ReactDOM || _ReactDOM;

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

export function renderRuntime(
  {
    width,
    height,
    controls
  }: {
    width: number;
    height: number;
    controls: ControlOptions<any>[];
  },
  reacctDOM: typeof ReactDOM = ReactDOM
) {
  const element = (
    <MimicRuntime {...size(width, height)} controls={controls}></MimicRuntime>
  );
  return (container: HTMLElement) => reacctDOM.render(element, container);
}
