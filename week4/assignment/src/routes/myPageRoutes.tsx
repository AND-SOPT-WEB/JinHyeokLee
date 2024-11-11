import { routePath } from "@constants";
import Hobby from "@pages/myPage/hobby/Hobby";
import Info from "@pages/myPage/info/Info";
import { RouteType } from "src/types/routeType";

const myPageRoutes: RouteType[] = [
  {
    path: routePath.MY_PAGE_HOBBY,
    element: <Hobby />,
  },
  {
    path: routePath.MY_PAGE_INFO,
    element: <Info />,
  },
];

export default myPageRoutes;
