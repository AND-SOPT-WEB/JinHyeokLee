import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import Header from 'src/components/common/header/Header';

const MyPage = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default MyPage;
