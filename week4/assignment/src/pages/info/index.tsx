import { Button } from '@components';
import styled from '@emotion/styled';
import useUserInfo from 'src/hooks/useUserInfo';

const Info = () => {
  const { newPassword, newHobby, handlePasswordChange, handleHobbyChange, handleSubmit } = useUserInfo();

  return (
    <Wrapper>
      <Title>정보 수정하기</Title>
      <ContentLayout>
        <SubTitle>새 비밀번호</SubTitle>
        <Input type="password" value={newPassword} onChange={handlePasswordChange} />
      </ContentLayout>

      <ContentLayout>
        <SubTitle>새 취미</SubTitle>
        <Input type="text" value={newHobby} onChange={handleHobbyChange} />
        <Button onClick={() => handleSubmit()}>수정하기</Button>
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
