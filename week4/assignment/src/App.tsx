import styled from '@emotion/styled';
import { authRoutes, myPageRoutes } from '@routes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const allRoutes = [...authRoutes, ...myPageRoutes];
  const router = createBrowserRouter(allRoutes as never); // 여기는 왜 문제가 생겼을까..

  return (
    <AppWrapper>
      <RouterProvider router={router} />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export default App;
