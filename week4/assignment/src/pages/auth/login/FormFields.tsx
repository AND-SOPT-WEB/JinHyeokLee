import { Button } from '@components';
import { routePath } from '@constants';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import useLogin from 'src/hooks/useLogin';

const FormFields = () => {
  const { username, password, handleInputChange, handleLogin } = useLogin();
  const navigate = useNavigate();

  return (
    <FormLayout>
      <Input name="username" placeholder="아이디" value={username} onChange={handleInputChange} />
      <Input name="password" type="password" placeholder="비밀번호" value={password} onChange={handleInputChange} />
      <Button onClick={handleLogin}>로그인</Button>
      <SubButton type="button" onClick={() => navigate(routePath.SIGN_UP)}>
        회원가입
      </SubButton>
    </FormLayout>
  );
};

const FormLayout = styled.form`
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
