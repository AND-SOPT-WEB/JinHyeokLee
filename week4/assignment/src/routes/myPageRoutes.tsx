import { routePath } from '@constants';
import Hobby from '@pages/hobby';
import Info from '@pages/info';
import MyPage from '@pages/myPage';
import { RouteType } from 'src/types/routeType';

const myPageRoutes: RouteType[] = [
  {
    path: routePath.MY_PAGE,
    element: <MyPage />,
    children: [
      {
        index: true,
        element: <Hobby />,
      },
      {
        path: routePath.MY_PAGE_INFO,
        element: <Info />,
      },
    ],
  },
];

export default myPageRoutes;
