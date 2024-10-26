import styled from '@emotion/styled';
import { useState } from 'react';

const MemberCard = ({ member }) => {
  const { name, englishName, github } = member;
  const [likeNum, setLikeNum] = useState(0);

  const addLike = () => {
    setLikeNum((prev) => prev + 1);
  };

  return (
    <Wrapper>
      <Name>{name}</Name>
      <Text>{englishName}</Text>
      <Text>{github}</Text>
      <LikeContainer>
        <LikeNum>{likeNum}</LikeNum>
        <LikeButton onClick={addLike}>좋아요</LikeButton>
      </LikeContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 20rem;
  height: 15rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: #64646f33 0px 7px 29px 0px;
  border-radius: 8px;
  background-color: #ffffff;
`;

const Name = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`;

const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LikeNum = styled.p`
  font-weight: 700;
`;

const LikeButton = styled.button`
  background-color: #000000;
  color: #ffffff;

  &:hover {
    background-color: #2a32bb;
  }
  transition: all 0.2s;
`;

const Text = styled.p``;

export default MemberCard;
