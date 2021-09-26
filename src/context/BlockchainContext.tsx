// Blockchain context

import React from 'react';

interface IBlockchainContext {
  loading: boolean;
  account: string;
  tokemonToken: any; // TODO
  web3: any; // TODO
  errorMessage: string;
}

const defaultState = {
  loading: false,
  account: '',
  tokemonToken: null,
  web3: null,
  errorMessage: '',
};

const BlockchainContext = React.createContext<IBlockchainContext>(defaultState);

const BlockchainContextProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [account, setAccount] = React.useState('');
  const [tokemonToken, setTokemonToken] = React.useState(null);
  const [web3, setWeb3] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState('');

  return (
    <BlockchainContext.Provider
      value={{
        loading,
        account,
        tokemonToken,
        web3,
        errorMessage,
      }}
    >
      {children}
    </BlockchainContext.Provider>
  );
};

export { BlockchainContext, BlockchainContextProvider };
