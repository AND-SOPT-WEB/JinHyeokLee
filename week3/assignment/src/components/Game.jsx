import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import LEVEL_DATA from '../data/level';

const Game = ({ level }) => {
  const [firstNumbers, setFirstNumbers] = useState([]);
  const [secondNumbers, setSecondNumbers] = useState([]);
  const [nextNum, setNextNum] = useState(1);
  const [clicked, setClicked] = useState([]);

  useEffect(() => {
    initGame();
  }, [level]);

  // 게임 초기 시작 세팅
  const initGame = () => {
    const size = LEVEL_DATA[level].size;
    setFirstNumbers(generateRandomNumbers(size));
    setSecondNumbers(generateSecondNumbers(size));
    setNextNum(1);
  };

  // 랜덤 숫자 생성
  const generateRandomNumbers = (size) => shuffleArray(Array.from({ length: size }, (_, idx) => idx + 1));
  const generateSecondNumbers = (size) => Array.from({ length: size }, (_, idx) => size + idx + 1);

  // 섞는 알고리즘 (fish..뭐시기)
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // NumBtn 클릭 로직
  const handleClick = (index) => {
    if (isFirstLayer(index)) {
      handleFirstLayerClick(index);
    } else if (isSecondLayer(index)) {
      handleSecondLayerClick(index);
    }

    if (nextNum === LEVEL_DATA[level].size * 2) {
      alert('끝났습니다.');
      initGame();
    }
  };

  // 앞 면 클릭
  const isFirstLayer = (index) => firstNumbers[index] === nextNum;

  const handleFirstLayerClick = (index) => {
    const updatedClicked = [...clicked];
    updatedClicked[index] = true;
    setClicked(updatedClicked);
    updateNumbers(index);
  };

  // 뒷 면 클릭
  const isSecondLayer = (index) => firstNumbers[index] > LEVEL_DATA[level].size;

  const handleSecondLayerClick = (index) => {
    const updatedNumbers = [...firstNumbers];
    if (secondNumbers[nextNum - 1] === firstNumbers[index]) {
      updatedNumbers[index] = null;
      setFirstNumbers(updatedNumbers);
    }
  };

  // 숫자 update
  const updateNumbers = (index) => {
    const updatedNumbers = [...firstNumbers];
    updatedNumbers[index] = secondNumbers[nextNum - 1];

    setFirstNumbers(updatedNumbers);
    setNextNum((prev) => prev + 1);
  };

  return (
    <Wrapper>
      <NextNum>다음 숫자 : {nextNum}</NextNum>
      <GamePadContainer size={LEVEL_DATA[level].size}>
        {firstNumbers.map((num, index) => (
          <NumBtn key={index} onClick={() => handleClick(index)}>
            {num}
          </NumBtn>
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
