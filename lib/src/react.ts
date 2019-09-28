import * as _React from 'react';
import * as _ReactDOM from 'react-dom';

let React: typeof _React;
let ReactDOM: typeof _ReactDOM;

export function importReact() {
  return {
    React: React || _React,
    ReactDOM: ReactDOM || _ReactDOM
  };
}

export function useReact(react: typeof React) {
  React = react;
}

export function useReactDOM(reactDOM: typeof ReactDOM) {
  ReactDOM = reactDOM;
}
