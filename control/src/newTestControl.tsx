import { React } from 'react-runtime';
import { createControl } from 'react-runtime';
import { TestControl } from './testControl';

const useState = React.useState;

export const NewTestControl = createControl('newTest', () => {
  const [t, updateT] = useState('');
  setTimeout(() => updateT(new Date().toISOString()), 1000);
  return <TestControl.render text={t}></TestControl.render>;
});
