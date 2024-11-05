import { useState } from 'react';
import Game from './components/Game';
import Header from './components/Header';
import TABS_DATA from './data/tabs';

function App() {
  const [activeTab, setActiveTab] = useState(TABS_DATA[0].id);
  const [level, setLevel] = useState('level1');

  const handleTabActive = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <Header handleTabActive={handleTabActive} activeTab={activeTab} setLevel={setLevel} />
      {activeTab === 'game' && <Game level={level} />}
    </>
  );
}

export default App;
