import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const Ranking = ({ resetTimer }) => {
  const [recordList, setRankingList] = useState([]);

  useEffect(() => {
    resetTimer();

    const recordList = JSON.parse(localStorage.getItem('recordList')) || [];
    setRankingList(recordList);
  }, []);

  return (
    <Wrapper>
      <HeaderContainer>
        <Title>랭킹</Title>
        <ResetBtn>초기화</ResetBtn>
      </HeaderContainer>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>타임스탬프</TableHeader>
            <TableHeader>레벨</TableHeader>
            <TableHeader>플레이 시간</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {recordList.map(({ date, level, time }, index) => (
            <TableRow key={index}>
              <TableData>{date}</TableData>
              <TableData>{level}</TableData>
              <TableData>{time} 초</TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 60rem;
  padding: 2rem;
  border-radius: 0.2rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 5rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Title = styled.p`
  font-size: 2rem;
  text-align: center;
  flex-grow: 1;
`;

const ResetBtn = styled.button`
  width: 5rem;
  height: 2rem;
  border: none;
  border-radius: 0.2rem;
  align-self: flex-end;
  background-color: ${({ theme }) => theme.colors.blue2};
  color: ${({ theme }) => theme.colors.blue4};
  cursor: pointer;
`;

const Table = styled.table`
  width: 50rem;
  border-collapse: collapse;
  margin-top: 1rem;
`;

const TableRow = styled.tr`
  background-color: ${({ theme }) => theme.colors.blue2};
`;

const TableHeader = styled.th`
  padding: 1rem;
  text-align: left;
  background-color: ${({ theme }) => theme.colors.blue3};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  border: 1px solid #ddd;
`;

const TableData = styled.td`
  padding: 1rem;
  text-align: left;
  border: 1px solid #ddd;
`;

export default Ranking;
