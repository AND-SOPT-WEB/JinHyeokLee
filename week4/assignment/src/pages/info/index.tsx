import { Button } from '@components';
import { routePath } from '@constants';
import styled from '@emotion/styled';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateUserInfo } from 'src/apis/edit';
import { handleError } from 'src/utils/errorUtil';

const Info = () => {
  const [newPassword, setNewPassword] = useState('');
  const [newHobby, setNewHobby] = useState('');
  const navigate = useNavigate();

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleHobbyChange = (e: ChangeEvent<HTMLInputElement>) => {
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
      } else if (status === 401 || status === 403) {
        alert('토큰이 유효하지 않습니다. 다시 로그인해주세요.');
        navigate(routePath.LOGIN);
      } else {
        alert('알 수 없는 오류가 발생했습니다.');
      }
    }
  };

  return (
    <Wrapper>
      <Title>정보 수정하기</Title>
      <ContentLayout>
        <SubTitle>새 비밀번호</SubTitle>
        <Input type="password" onChange={handlePasswordChange}></Input>
      </ContentLayout>

      <ContentLayout>
        <SubTitle>새 취미</SubTitle>
        <Input type="text" onChange={handleHobbyChange}></Input>
        <Button onClick={handleSubmit}>수정하기</Button>
      </ContentLayout>
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

const Title = styled.p`
  ${({ theme }) => theme.fonts.title}
  margin-bottom: 2rem;
`;

const ContentLayout = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SubTitle = styled.p`
  ${({ theme }) => theme.fonts.subTitle}
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

export default Info;
