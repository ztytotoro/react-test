import React from 'react';
import logo from 'assets/logo.svg';
import './App.css';
import { MimicRuntime, registerControl } from 'core/runtime';
import { Controls, TestControl, NewTestControl } from 'controls';
import { size, pos } from 'core/utils';

registerControl(Controls);

const App: React.FC = () => {
  const controls = [
    TestControl.option({
      ...size(400, 300),
      ...pos(50, 50),
      props: {
        text: '123'
      }
    }),
    NewTestControl.option({
      ...size(800, 300),
      ...pos(50, 50)
    })
  ];
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw'
      }}
    >
      <MimicRuntime {...size(1920, 1080)} controls={controls}></MimicRuntime>
    </div>
  );
};

export default App;
