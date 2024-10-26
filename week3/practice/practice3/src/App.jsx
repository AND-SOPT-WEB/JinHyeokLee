import styled from '@emotion/styled';
import MemberCard from './components/MemberCard.jsx';
import { members } from './data/members.js';

function App() {
  return (
    <Wrapper>
      <Title>🌊 물결 웨비들 🌊</Title>
      <MemberContainer>
        {members.map((member) => (
          <MemberCard member={member} key={member.id} />
        ))}
      </MemberContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #a3e8ff32;
`;

const Title = styled.p`
  font-size: 2rem;
  font-weight: 900;
`;

const MemberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

export default App;
