import React, { useState } from 'react';
import { createControl } from 'core/control';
import { TestControl } from 'controls';

export const NewTestControl = createControl('newTest', () => {
  const [t, updateT] = useState('');
  setTimeout(() => updateT(new Date().toISOString()), 1000);
  return <TestControl.render text={t}></TestControl.render>;
});
