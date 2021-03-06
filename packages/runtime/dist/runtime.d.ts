import React from 'react';
import { Control, ControlOptions } from './types';
interface Props {
    height: number;
    width: number;
    controls: ControlOptions[];
}
export declare const MimicRuntime: React.FC<Props>;
export declare function registerControl(controls: Control[]): void;
export declare function renderRuntime({ width, height, controls }: {
    width: number;
    height: number;
    controls: ControlOptions<any>[];
}): (container: HTMLElement, refresh?: boolean) => void;
export {};
