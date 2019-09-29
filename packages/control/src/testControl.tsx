import React from 'react';
import { createControl } from '@ztytotoro/react-runtime';

interface Props {
  text: string;
}

export const TestControl = createControl<Props>('test', ({ text }) => (
  <div>{text}</div>
));
