import { useEffect, useState } from 'react';
import Game from './components/Game';
import Header from './components/Header';
import TABS_DATA from './data/tabs';

function App() {
  const [activeTab, setActiveTab] = useState(TABS_DATA[0].id);
  const [level, setLevel] = useState('level1');
  const [time, setTime] = useState(0);

  const resetTimer = () => {
    setTime(0);
  };

  useEffect(() => {
    let timer;
    // if (isTimerRunning) {
    timer = setInterval(() => {
      setTime((prevTime) => prevTime + 0.01);
    }, 10);
    // }
    return () => clearInterval(timer);
  }, []);

  const handleTabActive = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <Header
        handleTabActive={handleTabActive}
        activeTab={activeTab}
        setLevel={setLevel}
        time={time}
        resetTimer={resetTimer}
      />
      {activeTab === 'game' && <Game level={level} />}
    </>
  );
}

export default App;
