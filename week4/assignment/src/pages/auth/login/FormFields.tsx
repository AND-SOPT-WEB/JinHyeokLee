import { Button } from '@components';
import { routePath } from '@constants';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from 'src/apis/auth';
import { handleError } from 'src/utils/errorUtil';

const FormFields = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const navigateToSignUp = () => {
    navigate(routePath.SIGN_UP);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleLogin = async () => {
    try {
      const result = await loginUser(username, password);

      if (result?.result) {
        localStorage.setItem('token', result.result.token);
        alert('로그인 성공');
        // 라우팅
      }
    } catch (error) {
      const { status, code } = handleError(error as Error);

      if (status === 400) {
        if (code === '01') {
          setErrorMessage('입력한 정보가 유효하지 않습니다.');
        } else if (code === '02') {
          setErrorMessage('로그인 정보가 잘못되었습니다.');
        }
      } else if (status === 403) {
        if (code === '01') {
          setErrorMessage('비밀번호가 잘못되었습니다.');
        }
      } else {
        setErrorMessage('알 수 없는 오류가 발생했습니다.');
      }
    }
  };

  return (
    <FormLayout>
      <Input name="username" placeholder="아이디" value={username} onChange={handleInputChange} />
      <Input name="password" type="password" placeholder="비밀번호" value={password} onChange={handleInputChange} />
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      <Button onClick={handleLogin}>로그인</Button>
      <SubButton type="button" onClick={navigateToSignUp}>
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

const ErrorText = styled.div`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

export default FormFields;
