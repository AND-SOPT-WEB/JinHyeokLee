import { routePath } from '@constants';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from 'src/apis/auth';
import { handleError } from 'src/utils/errorUtil';

const useLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

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
        navigate(routePath.MY_PAGE);
      }
    } catch (error) {
      const { status, code } = handleError(error as Error);

      if (status === 400) {
        alert('입력한 정보가 유효하지 않습니다.');
      } else if (status === 403 && code === '01') {
        // 이 경우가 403이 맞나..?
        alert('비밀번호가 잘못되었습니다.');
      } else {
        alert('알 수 없는 오류가 발생했습니다.');
      }
    }
  };

  return {
    username,
    password,
    handleInputChange,
    handleLogin,
    setUsername,
    setPassword,
  };
};

export default useLogin;
