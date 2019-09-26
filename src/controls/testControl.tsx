import React from 'react';
import { createControl } from 'core/control';
import produce from 'immer';

interface Props {
  text: string;
}

export const TestControl = createControl<Props>('test', ({ text }) => (
  <div>{text}</div>
));
