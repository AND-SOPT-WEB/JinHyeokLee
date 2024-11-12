import { Button } from '@components';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { getMyHobby } from 'src/apis/myPage';

const Hobby = () => {
  const [myHobby, setMyHobby] = useState('');

  const tempSearch = () => {
    console.log('검색');
  };

  const fetchMyHobby = async () => {
    const data = await getMyHobby();
    setMyHobby(data.result.hobby);
  };

  useEffect(() => {
    fetchMyHobby();
  }, []);

  return (
    <Wrapper>
      <Title>취미</Title>
      <ContentLayout>
        <SubTitle>나의 취미</SubTitle>
        <HobbyText>{myHobby}</HobbyText>
      </ContentLayout>

      <ContentLayout>
        <SubTitle>다른 사람들의 취미</SubTitle>
        <OtherUserInput></OtherUserInput>
      </ContentLayout>
      <Button onClick={tempSearch}>검색하기</Button>
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

const HobbyText = styled.p``;

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

export default Hobby;
