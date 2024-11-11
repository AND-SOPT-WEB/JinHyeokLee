import { Button } from "@components";
import { routePath } from "@constants";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const FormFields = () => {
  const navigate = useNavigate();

  const navigateToSignUp = () => {
    navigate(routePath.SIGN_UP);
  };

  return (
    <FormLayout>
      <Input placeholder="로그인"></Input>
      <Input placeholder="회원가입"></Input>
      <Button>로그인</Button>
      <SubButton onClick={navigateToSignUp}>회원가입</SubButton>
    </FormLayout>
  );
};

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

export default FormFields;
