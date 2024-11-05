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

  // 타이머 리셋
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

  // tab
  const handleTabActive = (tabId) => {
    setActiveTab(tabId);
    localStorage.setItem('activeTab', tabId);

    if (tabId === 'game') {
      setLevel('level1'); // 다른 탭 갔다가 game오면 level1으로 초기화
      resetTimer();
    }
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
      <div id="modal" />
    </>
  );
}

export default App;
