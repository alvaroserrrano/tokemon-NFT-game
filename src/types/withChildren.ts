import type { ReactChild, ReactNodeArray, ReactPortal } from 'react';

type ReactNode =
  | ReactChild
  | ReactNodeArray
  | ReadonlyArray<ReactNode>
  | ReactPortal
  | boolean
  | null
  | undefined;

export type WithChildren<T = {}> = T & { children?: ReactNode };
