import React, { useState } from 'react';

function App() {
  // oiの状態をuseStateで管理
  const [oi, setOi] = useState(false);
  // カウンターの状態をuseStateで管理
  const [count, setCount] = useState(0);

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

  return (
    <div className='u'>
      <h1>カウンターアプリ</h1>
      <p>現在のカウント: {count}</p>
      <button onClick={incrementCount}>増やす</button>
      <button onClick={decrementCount} disabled={!oi}>減らす</button>
    </div>
  );
}

export default App;
