import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const Ranking = ({ resetTimer }) => {
  const [recordList, setRecordList] = useState([]);

  useEffect(() => {
    resetTimer();

    const storedRecords = JSON.parse(localStorage.getItem('recordList')) || [];
    const sortedRecords = sortRecords(storedRecords);

    setRecordList(sortedRecords);
  }, [resetTimer]);

  // 레벨 -> 내림차순, 시간 -> 오름차순 정렬
  const sortRecords = (records) => {
    return records.sort((a, b) => {
      // level이 문자열 'level1'이라 숫자부분 추출해서 파싱하는 역할
      const levelA = parseInt(a.level.replace('level', ''), 10);
      const levelB = parseInt(b.level.replace('level', ''), 10);

      if (levelB !== levelA) {
        return levelB - levelA; // 레벨 내림차순
      }

      return a.time - b.time; // 시간 오름차순
    });
  };

  const resetRecordList = () => {
    localStorage.removeItem('recordList');
    setRecordList([]);
  };

  return (
    <Wrapper>
      <HeaderContainer>
        <Title>랭킹</Title>
        <ResetBtn onClick={resetRecordList}>초기화</ResetBtn>
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
