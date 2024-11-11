import { Button } from "@components";
import { routePath } from "@constants";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const navigateToSignUp = () => {
    navigate(routePath.SIGN_UP);
  };

  return (
    <Wrapper>
      <Title>로그인</Title>
      <FormLayout>
        <Input placeholder="로그인"></Input>
        <Input placeholder="회원가입"></Input>
        <Button>로그인</Button>
      </FormLayout>
      <SubButton onClick={navigateToSignUp}>회원가입</SubButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 24rem;
  padding: 2rem 0;
  margin: auto;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  ${({ theme }) => theme.fonts.title}
`;

const FormLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const Input = styled.input`
  width: 100%;
  height: 3rem;
  padding: 1rem;
  border: none;
  border-radius: 0.3rem;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.green3};
  }
`;

const SubButton = styled.button`
  margin-top: 1.5rem;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.green4};
  cursor: pointer;
`;

export default Login;
