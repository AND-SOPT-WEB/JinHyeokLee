import { Button } from '@components';
import styled from '@emotion/styled';
import { ChangeEvent, useState } from 'react';
import useHobby from 'src/hooks/useHobby';

const Hobby = () => {
  const { myHobby, otherHobby, fetchOtherHobby } = useHobby();
  const [otherNum, setOtherNum] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOtherNum(e.target.value);
  };

  const handleFetchOtherHobby = () => {
    fetchOtherHobby(otherNum);
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
        <Button onClick={handleFetchOtherHobby}>검색하기</Button>
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
