import { Pos, Size } from './types';

export function pos(x: number, y: number): Pos {
  return {
    x,
    y
  };
}

export function size(width: number, height: number): Size {
  return {
    height,
    width
  };
}
