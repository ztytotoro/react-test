/// <reference types="react" />
import { ControlOptions, Control } from './types';
import _ReactDOM from 'react-dom';
declare const ReactDOM: typeof _ReactDOM;
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
}, reacctDOM?: typeof ReactDOM): (container: HTMLElement) => void;
export {};
