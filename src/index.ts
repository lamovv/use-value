/**
 * 计数器组件，同时输出子组件
 */
import { useCallback, useMemo, useRef, useState } from 'react';
import { IFCProps, noop, PickFunction, TSetStateAction } from './interface';
export { IFCProps } from './interface';

function useUpdate() {
  const [, setState] = useState({});

  return useCallback(() => setState({}), []);
}

function useMemoizedFn<T extends noop>(fn: T) {
  const fnRef = useRef<T>(fn);
  fnRef.current = useMemo(() => fn, [fn]);

  const memoizedFn = useRef<PickFunction<T>>();
  if (!memoizedFn.current) {
    memoizedFn.current = function (this, ...args) {
      return fnRef.current.apply(this, args);
    };
  }

  return memoizedFn.current as T;
}
export default function useValue<T>(options: IFCProps<T>): [T, TSetStateAction<T>] {
  const { value, defaultValue, onChange } = options;

  const update = useUpdate();

  const stateRef = useRef<T>(value !== undefined ? value! : defaultValue!);
  if (value !== undefined) {
    stateRef.current = value;
  }

  const setState: TSetStateAction<T> = useMemoizedFn<TSetStateAction<T>>((v, force = false) => {
    const nextValue = typeof v === 'function' ? (v as (prevState: T) => T)(stateRef.current) : v;

    if (!force && nextValue === stateRef.current) {
      return;
    }

    stateRef.current = nextValue;
    update();
    onChange?.(nextValue);
  });

  return [stateRef.current, setState];
}
