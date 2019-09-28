import { importReact } from 'react-runtime';
import { createControl } from 'react-runtime';

const { React } = importReact();

interface Props {
  text: string;
}

export const TestControl = createControl<Props>('test', ({ text }) => (
  <div>{text}</div>
));
