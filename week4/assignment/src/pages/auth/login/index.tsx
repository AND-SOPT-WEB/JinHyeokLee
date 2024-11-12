import styled from '@emotion/styled';
import FormFields from './FormFields';

const Login = () => {
  return (
    <Wrapper>
      <Title>로그인</Title>
      <FormFields />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 24rem;
  margin: auto;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  ${({ theme }) => theme.fonts.title}
`;

export default Login;
