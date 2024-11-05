import { useState } from 'react';
import Header from './components/Header';
import TABS_DATA from './data/tabs';

function App() {
  const [activeTab, setActiveTab] = useState(TABS_DATA[0].id);

  const handleTabActive = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <Header handleTabActive={handleTabActive} activeTab={activeTab} />
    </>
  );
}

export default App;
