import { useEffect, useState } from 'react';
import Game from './components/Game';
import Header from './components/Header';
import Ranking from './components/Ranking';
import TABS_DATA from './data/tabs';

function App() {
  const savedTab = localStorage.getItem('activeTab') || TABS_DATA[0].id;
  const [activeTab, setActiveTab] = useState(savedTab);
  const [level, setLevel] = useState('level1');
  const [time, setTime] = useState(0);
  const [isActiveTimer, setIsActiveTimer] = useState(false);

  const resetTimer = () => {
    setTime(0);
    setIsActiveTimer(false);
  };

  useEffect(() => {
    let timer;
    if (isActiveTimer) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 0.01);
      }, 10);
    }
    return () => clearInterval(timer);
  }, [isActiveTimer]);

  const handleTabActive = (tabId) => {
    setActiveTab(tabId);
    localStorage.setItem('activeTab', tabId);
  };

  return (
    <>
      <Header
        handleTabActive={handleTabActive}
        activeTab={activeTab}
        setLevel={setLevel}
        time={time.toFixed(2)}
        resetTimer={resetTimer}
      />
      {activeTab === 'game' && (
        <Game level={level} setIsActiveTimer={setIsActiveTimer} time={time.toFixed(2)} resetTimer={resetTimer} />
      )}
      {activeTab === 'ranking' && <Ranking resetTimer={resetTimer} />}
    </>
  );
}

export default App;
