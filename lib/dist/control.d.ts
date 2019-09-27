import React from 'react';
import { Control } from './types';
export declare function createControl<T extends {} = {}>(name: string, component: React.FC<T>): Control<T>;
