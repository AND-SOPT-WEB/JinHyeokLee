import { routePath } from "@constants";
import Login from "../pages/auth/login";
import SignUp from "../pages/auth/signUp/SignUp";
import { RouteType } from "../types/routeType";

const authRoutes: RouteType[] = [
  {
    path: routePath.LOGIN,
    element: <Login />,
  },
  {
    path: routePath.SIGN_UP,
    element: <SignUp />,
  },
];

export default authRoutes;
