import React from 'react';
import backgroundImageColor from './assets/background/backgroundImageColor.png';
import './App.css';

function App(): JSX.Element {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
        backgroundImage: `url(${backgroundImageColor})`,
        top: 0,
        left: 0,
      }}
    >
      <p>hello</p>
    </div>
  );
}

export default App;
