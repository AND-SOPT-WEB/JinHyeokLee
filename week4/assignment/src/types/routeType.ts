import { ReactNode } from 'react';

export interface RouteType {
  path?: string;
  index?: boolean;
  element: ReactNode;
  children?: RouteType[]; // 중첩으로 라우팅할 때 이렇게 사용
}
