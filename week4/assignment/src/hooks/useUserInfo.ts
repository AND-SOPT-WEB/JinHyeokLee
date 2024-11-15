import { routePath } from '@constants';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateUserInfo } from 'src/apis/edit';
import { handleError } from 'src/utils/errorUtil';

const useUserInfo = () => {
  const [newPassword, setNewPassword] = useState('');
  const [newHobby, setNewHobby] = useState('');
  const navigate = useNavigate();

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleHobbyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewHobby(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      if (newPassword === '' && newHobby === '') {
        alert('최소 하나의 수정 정보가 필요합니다.');
        return;
      }

      const updateData = {
        hobby: newHobby,
        password: newPassword,
      };

      await updateUserInfo(updateData);
      alert('정보 수정이 완료되었습니다.');
      localStorage.removeItem('token');
      navigate(routePath.LOGIN);
    } catch (error) {
      const { status, code } = handleError(error as Error);

      if (status === 400 && code === '00') {
        alert('취미와 비밀번호는 최대 8글자입니다.');
      } else {
        alert('알 수 없는 오류가 발생했습니다.');
      }
    }
  };

  return {
    newPassword,
    newHobby,
    handlePasswordChange,
    handleHobbyChange,
    handleSubmit,
  };
};

export default useUserInfo;
