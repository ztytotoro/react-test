import React from 'react';
import { Control, ControlOptions } from './types';

export function createControl<T extends {} = {}>(
  name: string,
  component: React.FC<T>
): Control<T> {
  const option: (
    options: Omit<ControlOptions<T>, 'type'>
  ) => ControlOptions<T> = options => ({
    type: name,
    ...options
  });

  return {
    type: name,
    render: component,
    option
  };
}
