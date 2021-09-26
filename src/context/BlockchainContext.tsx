// Blockchain context

import React from 'react';

interface IBlockchainContextState {
  loading: boolean;
  account: string;
  tokemonToken: string; // TODO
  web3: string; // TODO
  errorMessage: string;
}

interface IBlockchainContextValue {
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

type ACTIONTYPE =
  | { type: 'CONNECTION_REQUEST'; payload: boolean }
  | { type: 'CONNECTION_SUCCESS'; payload: CONNECTION_SUCCESS_PAYLOAD }
  | { type: 'CONNECTION_FAIL'; payload: string }
  | { type: 'ACCOUNT_UPDATE'; payload: ACCOUNT_UPDATE_PAYLOAD };

const initialState: IBlockchainContextState = {
  loading: false,
  account: '',
  tokemonToken: '',
  web3: '',
  errorMessage: '',
};

const BlockchainContext =
  React.createContext<IBlockchainContextState>(initialState);

const BlockchainContextProvider: React.FC<IBlockchainContextValue> = ({
  children,
}) => {
  const [loading, setLoading] = React.useState(false);
  const [account, setAccount] = React.useState('');
  const [tokemonToken, setTokemonToken] = React.useState(null);
  const [web3, setWeb3] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState('');

  // Context Update Setters

  const blockchainReducer = (
    state: typeof initialState,
    action: ACTIONTYPE
  ): IBlockchainContextState => {
    switch (action.type) {
      case 'CONNECTION_REQUEST':
        return { ...state, loading: true };
      case 'CONNECTION_SUCCESS':
        return {
          ...state,
          loading: false,
          account: action.payload.account,
          tokemonToken: action.payload.tokemonToken,
          web3: action.payload.web3,
        };
      case 'CONNECTION_FAIL':
        return { ...state, loading: false, errorMessage: action.payload };
      case 'ACCOUNT_UPDATE':
        return { ...state, account: action.payload.account };
      default:
        return state;
    }
  };

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
