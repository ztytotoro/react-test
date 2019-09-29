import React from 'react';
import ReactDOM from 'react-dom';
import { ControlWrapper } from './controlWrapper';
import { size } from './utils';
const controlMap = {};
export const MimicRuntime = ({ height, width, controls }) => {
    return (React.createElement("div", { style: {
            height: height + 'px',
            width: width + 'px',
            position: 'relative'
        } }, controls.map((control, index) => {
        const Control = controlMap[control.type];
        return (React.createElement(ControlWrapper, { height: control.height, width: control.width, x: control.x, y: control.y, key: index },
            React.createElement(Control, Object.assign({}, control.props))));
    })));
};
export function registerControl(controls) {
    controls.forEach(c => (controlMap[c.type] = c.render));
}
export function renderRuntime({ width, height, controls }) {
    const element = (React.createElement(MimicRuntime, Object.assign({}, size(width, height), { controls: controls })));
    let isRendered = false;
    return (container, refresh = false) => {
        if (refresh || !isRendered) {
            ReactDOM.render(element, container);
            isRendered = true;
        }
    };
}
//# sourceMappingURL=runtime.js.map