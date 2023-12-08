import { Color, IUniform as IThreeUniform, Vector4 } from 'three';
export declare type IGradient = [number, Color][];
export interface IClassification {
    [value: string]: {
        visible: boolean;
        color: Vector4;
    };
    DEFAULT: {
        visible: boolean;
        color: Vector4;
    };
}
export interface IUniform<T> extends IThreeUniform {
    type: string;
    value: T;
}
