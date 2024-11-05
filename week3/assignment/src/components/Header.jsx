import styled from '@emotion/styled';
import TABS_DATA from '../data/tabs';

const Header = ({ handleTabActive, activeTab }) => {
  return (
    <Wrapper>
      <MenuContainer>
        <Title>1 TO 50</Title>
        <ButtonBox>
          {TABS_DATA.map(({ id, content }) => (
            <MenuButton key={id} $isActive={activeTab === id} onClick={() => handleTabActive(id)}>
              {content}
            </MenuButton>
          ))}
        </ButtonBox>
      </MenuContainer>

      {activeTab === 'game' && (
        <MenuContainer>
          <LevelSelect>
            <option value="Level1">Level 1</option>
            <option value="Level2">Level 2</option>
            <option value="Level2">Level 3</option>
          </LevelSelect>
          <Timer>00:00</Timer>
        </MenuContainer>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  height: 5rem;
  padding: 0 15rem;
  justify-content: space-between;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue4};
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MenuButton = styled.button`
  width: 3rem;
  height: 2rem;
  background-color: ${({ $isActive, theme }) => ($isActive ? theme.colors.blue2 : 'transparent')};
  color: ${({ $isActive, theme }) => ($isActive ? theme.colors.black : theme.colors.white)};
  border: none;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;

const LevelSelect = styled.select`
  width: 5rem;
  height: 2rem;
  border-radius: 0.1rem;
  border: none;
`;

const Timer = styled.p`
  color: ${({ theme }) => theme.colors.white};
`;

export default Header;
