import React from 'react';
import { createControl } from 'react-runtime';
import { TestControl } from './testControl';
import { useState } from 'react';

export const NewTestControl = createControl('newTest', () => {
  const [t, updateT] = useState('');
  setTimeout(() => updateT(new Date().toISOString()), 1000);
  return <TestControl.render text={t}></TestControl.render>;
});
