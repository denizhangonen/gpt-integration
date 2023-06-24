import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [tokenCost, setTokenCost] = useState<number>(0);

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const calculateTokenCost = () => {
    // This is a naive implementation and won't match the GPT-3 API exactly
    const num = text.split(/\s+/).length;

    setTokenCost(num);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <textarea value={text} onChange={handleTextChange} />
        <button onClick={calculateTokenCost}>Calculate Token Cost</button>
        {tokenCost !== null && <p>Token Cost: {tokenCost}</p>}
      </header>
    </div>
  );
}

export default App;

