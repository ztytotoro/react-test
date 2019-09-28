import { importReact } from 'react-runtime';
import { createControl } from 'react-runtime';
const { React } = importReact();
export const TestControl = createControl('test', ({ text }) => (React.createElement("div", null, text)));
//# sourceMappingURL=testControl.js.map