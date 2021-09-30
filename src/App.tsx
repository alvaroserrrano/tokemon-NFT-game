import React from 'react';
import './App.css';
import backgroundImage from './assets/background/backgroundImageColor.png';

function App(): JSX.Element {
  return (
    <>
      <div className='w-full absolute top-0 left-0 h-full bg-cover bg-fixed'>
        <img src={backgroundImage} />
      </div>
    </>
  );
}

export default App;
