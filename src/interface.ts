import { SetStateAction } from 'react';

// 函数组件属性
export interface IFCProps<T = any> {
  className?: string;
  value?: T;
  readonly defaultValue?: T;
  onChange?: (v: T) => void;
}

export type TSetStateAction<T> = (v: SetStateAction<T>, force?: boolean) => void;

export type noop = (this: any, ...args: any[]) => any;

export type PickFunction<T extends noop> = (this: ThisParameterType<T>, ...args: Parameters<T>) => ReturnType<T>;
