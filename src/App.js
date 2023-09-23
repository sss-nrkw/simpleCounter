import React, { useState } from 'react';

function App() {
  const [oi, setOi] = useState(false);
  const [count, setCount] = useState(0);
  const [savedCounts, setSavedCounts] = useState([]); // 保存された値の配列

  const incrementCount = () => {
    setCount(count + 1);
    if (count === 0) {
      setOi(true);
    }
  };

  const decrementCount = () => {
    setCount(count - 1);
    if (count === 1) {
      setOi(false);
    }
  };

  const saveCount = () => {
    setSavedCounts([...savedCounts, count]); // 現在の値を配列に追加
  };

  return (
    <div className='u'>
      <h1>カウンターアプリ</h1>
      <p>現在のカウント: {count}</p>
      <button onClick={incrementCount}>増やす</button>
      <button onClick={decrementCount} disabled={!oi}>減らす</button>
      <button onClick={saveCount}>現在の値を保存する</button>
      <div>
        <p>保存されたカウント:</p>
        <ul>
          {savedCounts.map((savedCount, index) => (
            <li key={index}>{savedCount}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
