import { ReactNode } from 'react';

export interface RouteType {
  path: string;
  element: ReactNode;
  children?: RouteType[]; // 중첩으로 라우팅
}
