import * as _React from 'react';
import * as _ReactDOM from 'react-dom';
let React;
let ReactDOM;
export function importReact() {
    return {
        React: React || _React,
        ReactDOM: ReactDOM || _ReactDOM
    };
}
export function useReact(react) {
    React = react;
}
export function useReactDOM(reactDOM) {
    ReactDOM = reactDOM;
}
//# sourceMappingURL=react.js.map