import React from 'react';
export const ControlWrapper = ({ height, width, x, y, children }) => {
    return (React.createElement("div", { style: {
            height: height,
            width: width,
            position: 'absolute',
            left: x,
            top: y,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        } }, children));
};
//# sourceMappingURL=controlWrapper.js.map