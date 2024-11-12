import { routePath } from '@constants';
import Hobby from '@pages/hobby';
import Info from '@pages/info';
import MyPage from '@pages/myPage/MyPage';
import { RouteType } from 'src/types/routeType';

const myPageRoutes: RouteType[] = [
  {
    path: routePath.MY_PAGE,
    element: <MyPage />, // MyPage가 부모 컴포넌트
    children: [
      {
        path: routePath.MY_PAGE_HOBBY, // /users/me/hobby
        element: <Hobby />, // Hobby 컴포넌트
      },
      {
        path: routePath.MY_PAGE_INFO, // /users/me/info
        element: <Info />, // Info 컴포넌트
      },
    ],
  },
];

export default myPageRoutes;
