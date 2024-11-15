import { routePath } from '@constants';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const navigateToPage = (path: string) => {
    navigate(path);
  };

  const tempLogout = () => {
    if (confirm('로그아웃 하시겠습니까?')) {
      localStorage.removeItem('token');
      navigate(routePath.LOGIN);
    }
  };

  return (
    <Wrapper>
      <LeftSection>
        <Home>마이페이지</Home>
        <TabButton onClick={() => navigateToPage(routePath.MY_PAGE)}>취미</TabButton>
        <TabButton onClick={() => navigateToPage(routePath.MY_PAGE_INFO)}>내 정보</TabButton>
      </LeftSection>
      <RightSection>
        <LogoutButton onClick={tempLogout}>로그아웃</LogoutButton>
      </RightSection>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.colors.green3};
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const Home = styled.p`
  ${({ theme }) => theme.fonts.title}
  cursor: pointer;
`;

const TabButton = styled.p`
  ${({ theme }) => theme.fonts.subTitle}
  color: ${({ theme }) => theme.colors.green4};
  cursor: pointer;
`;

const RightSection = styled.div``;

const LogoutButton = styled.p`
  cursor: pointer;
`;

export default Header;
