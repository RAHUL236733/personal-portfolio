// Minimal JSX fallback types to allow TSX to typecheck without @types/react installed
declare namespace React {
  type ReactNode = any;

  interface FormEvent<T = any> extends Event {
    currentTarget: T;
    target: EventTarget & T;
  }
}

declare module 'react' {
  export type ReactNode = React.ReactNode;
  export type FormEvent<T = any> = React.FormEvent<T>;

  export function useState<T>(initialState: T | (() => T)): [T, (value: T | ((previousState: T) => T)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: readonly any[]): void;
  export function useMemo<T>(factory: () => T, deps?: readonly any[]): T;
  export function useRef<T>(initialValue: T): { current: T };
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps?: readonly any[]): T;
}

declare module 'react/jsx-runtime' {
  export function jsx(type: any, props: any): any;
  export function jsxs(type: any, props: any): any;
  export function jsxDEV(type: any, props: any): any;
}

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      [key: string]: any;
    }
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export {};
