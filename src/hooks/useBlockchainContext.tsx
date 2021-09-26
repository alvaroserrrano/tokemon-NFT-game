import React from 'react';
import { BlockchainContext } from '../context/BlockchainContext';

// context consumer hook
const useBlockchainContext = () => {
  // get the context
  const context = React.useContext(BlockchainContext);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error('useBlockchainContext was used outside of its Provider');
  }

  return context;
};

export { useBlockchainContext };
