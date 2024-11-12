import { Button } from '@components';
import styled from '@emotion/styled';
import { ChangeEvent, useState } from 'react';
import { getMyHobby, getOtherHobby } from 'src/apis/myPage';
import { handleError } from 'src/utils/errorUtil';

const Hobby = () => {
  const [myHobby, setMyHobby] = useState('');
  const [otherHobby, setOtherHobby] = useState('');
  const [otherNum, setOtherNum] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOtherNum(e.target.value);
  };

  const fetchMyHobby = async () => {
    try {
      const data = await getMyHobby();
      setMyHobby(data.result.hobby);
    } catch (error) {
      const { status } = handleError(error as Error);

      if (status === 401) {
        alert('토큰이 존재하지 않습니다. 다시 로그인해주세요.');
      } else if (status === 403) {
        alert('유효하지 않은 토큰입니다. 다시 로그인 해 주세요.');
      } else {
        alert('알 수 없는 오류가 발생했습니다.');
      }
    }
  };

  fetchMyHobby(); // useEffect를 지양하라고 해서 이렇게 했는데 이게 맞을까..?

  const fetchOtherHobby = async () => {
    try {
      const data = await getOtherHobby(otherNum);
      setOtherHobby(data.result.hobby);
    } catch (error) {
      const { status, code } = handleError(error as Error);

      if (status === 404 && code === '01') {
        alert('존재하지 않는 숫자입니다.');
      } else {
        alert('알 수 없는 오류가 발생했습니다.');
      }
    }
  };

  return (
    <Wrapper>
      <Title>취미</Title>
      <ContentLayout>
        <SubTitle>나의 취미</SubTitle>
        <HobbyText>{myHobby}</HobbyText>
      </ContentLayout>

      <ContentLayout>
        <SubTitle>다른 사람들의 취미</SubTitle>
        <OtherUserInput onChange={handleChange}></OtherUserInput>
        <Button onClick={fetchOtherHobby}>검색하기</Button>
        <OtherUserHobby>{otherHobby}</OtherUserHobby>
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

const HobbyText = styled.p`
  ${({ theme }) => theme.fonts.subTitle2}
`;

const OtherUserInput = styled.input`
  width: 100%;
  height: 3rem;
  padding: 1rem;
  border: none;
  border-radius: 0.3rem;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.green3};
  }
`;

const OtherUserHobby = styled.p`
  ${({ theme }) => theme.fonts.content2}
  color: ${({ theme }) => theme.colors.green3};
`;

export default Hobby;
