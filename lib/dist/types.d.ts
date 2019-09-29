import React from 'react';
export interface Pos {
    x: number;
    y: number;
}
export interface Size {
    height: number;
    width: number;
}
export interface ContainerOptions extends Pos, Size {
}
export interface ControlOptions<T extends {} = {}> extends Pos, Size {
    type: string;
    props?: T;
}
export interface Control<T extends {} = any> {
    type: string;
    render: React.FC<T>;
    option: (options: Omit<ControlOptions<T>, 'type'>) => ControlOptions<T>;
}
