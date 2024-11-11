import { authRoutes, myPageRoutes } from "@routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const allRoutes = [...authRoutes, ...myPageRoutes];

  const router = createBrowserRouter(allRoutes);

  return <RouterProvider router={router} />;
}

export default App;
