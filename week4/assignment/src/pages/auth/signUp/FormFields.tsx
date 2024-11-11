import { Button } from "@components";
import { routePath } from "@constants";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const FormFields = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate(routePath.LOGIN);
  };

  return (
    <FormLayout>
      <Input placeholder="이름"></Input>
      <Button>다음</Button>
      <SubText>
        이미 회원이신가요?{" "}
        <SubButton onClick={navigateToLogin}>로그인</SubButton>
      </SubText>
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

const SubText = styled.p`
  margin-top: 1.5rem;
`;

const SubButton = styled.button`
  margin-top: 0.5rem;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.green4};
  cursor: pointer;
`;

export default FormFields;
