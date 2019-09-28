import React, { useEffect } from 'react';
import './App.css';
import { registerControl, renderRuntime, size, pos } from 'react-runtime';
import { Controls, TestControl, NewTestControl } from 'react-control';

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
  const mount = renderRuntime({
    ...size(1920, 1080),
    controls
  });
  useEffect(() => {
    const container = document.getElementById('container');
    if (container) {
      mount(container);
    }
  }, []);
  return (
    <div
      id="container"
      style={{
        height: '100vh',
        width: '100vw'
      }}
    ></div>
  );
};

export default App;
