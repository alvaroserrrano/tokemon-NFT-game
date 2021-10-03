import React from 'react';
import './App.css';
import { BackgroundContainer } from './components/BackgroundContainer';
import { useBlockchainContext } from './hooks/useBlockchainContext';

function App(): JSX.Element {
  const { state, dispatch } = useBlockchainContext();
  React.useEffect(() => {
    dispatch({ type: 'CONNECTION_REQUEST' });
  }, [dispatch]);
  return (
    <BackgroundContainer>
      <p>hello</p>
    </BackgroundContainer>
  );
}

export default App;
