// Blockchain context

import React from 'react';
import { blockchainReducer } from './blockchainReducer';

export interface IBlockchainContextState {
  loading: boolean;
  account: string;
  tokemonToken: string; // TODO
  web3: string; // TODO
  errorMessage: string;
}

export interface IBlockchainContextValue {
  state: IBlockchainContextState;
  dispatch: React.Dispatch<any>;
}

type CONNECTION_SUCCESS_PAYLOAD = {
  account: string;
  tokemonToken: string;
  web3: string;
};

type ACCOUNT_UPDATE_PAYLOAD = {
  account: string;
};

export type ACTIONTYPE =
  | { type: 'CONNECTION_REQUEST'; payload: boolean }
  | { type: 'CONNECTION_SUCCESS'; payload: CONNECTION_SUCCESS_PAYLOAD }
  | { type: 'CONNECTION_FAIL'; payload: string }
  | { type: 'ACCOUNT_UPDATE'; payload: ACCOUNT_UPDATE_PAYLOAD };

export const initialState: IBlockchainContextState = {
  loading: false,
  account: '',
  tokemonToken: '',
  web3: '',
  errorMessage: '',
};

const BlockchainContext = React.createContext<IBlockchainContextValue>({
  state: initialState,
  dispatch: () => {}, // initialise with an empty function
});

type BlockchainContextProviderProps = {
  children: React.ReactNode;
};

const BlockchainContextProvider = ({
  children,
}: BlockchainContextProviderProps) => {
  const [loading, setLoading] = React.useState(false);
  const [account, setAccount] = React.useState('');
  const [tokemonToken, setTokemonToken] = React.useState(null);
  const [web3, setWeb3] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState('');

  // Context Update Setters

  const [state, dispatch] = React.useReducer(blockchainReducer, initialState);

  const blockchainContextValue = React.useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  );

  return (
    <BlockchainContext.Provider value={blockchainContextValue}>
      {children}
    </BlockchainContext.Provider>
  );
};

export { BlockchainContext, BlockchainContextProvider };
