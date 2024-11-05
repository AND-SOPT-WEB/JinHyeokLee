import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import LEVEL_DATA from '../data/level';

const Game = ({ level }) => {
  const [firstNumbers, setFirstNumbers] = useState([]);
  const [secondNumbers, setSecondNumbers] = useState([]);
  const [nextNum, setNextNum] = useState(1);

  // const levelSet = {
  //   level1: { size: 9 },
  //   level2: { size: 16 },
  //   level3: { size: 25 },
  // };

  // Fisher-Yates 알고리즘.. -> 랜덤으로 섞는 알고리즘
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // array 2개 세팅 (앞, 뒤)
  const settingArray = () => {
    const firstArray = Array.from({ length: LEVEL_DATA[level].size }, (_, index) => index + 1);
    const secondArray = Array.from(
      { length: LEVEL_DATA[level].size },
      (_, index) => LEVEL_DATA[level].size + index + 1,
    );

    const shuffledFirstArray = shuffleArray(firstArray);
    const shuffledSecondArray = shuffleArray(secondArray);

    setFirstNumbers(shuffledFirstArray);
    setSecondNumbers(shuffledSecondArray);
  };

  useEffect(() => {
    settingArray();
  }, [level]);

  return (
    <Wrapper>
      <NextNum>다음 숫자 : {nextNum}</NextNum>
      <GamePadContainer size={LEVEL_DATA[level].size}>
        {firstNumbers.map((num, idx) => (
          <NumBtn key={idx}>{num}</NumBtn>
        ))}
      </GamePadContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 5rem;
`;

const NextNum = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`;

const GamePadContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ size }) => Math.sqrt(size)}, 1fr);
  grid-template-rows: repeat(${({ size }) => Math.sqrt(size)}, 1fr);
  gap: 0.5rem;
`;

const NumBtn = styled.div`
  width: 5rem;
  height: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.blue2};
  color: ${({ theme }) => theme.colors.blue4};
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
`;

export default Game;
