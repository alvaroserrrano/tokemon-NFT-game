import React from 'react';
import { WithChildren } from '../../types/withChildren';
import { dataReducer } from './dataReducer';

export interface IDataContextState {
  loading: boolean;
  allTokemons: string[];
  ownerTokemons: string[]; // TODO
  error: boolean;
  errorMessage: string;
}

export interface IDataContextValue {
  state: IDataContextState;
  dispatch: React.Dispatch<any>;
}

type DATA_SUCCESS_PAYLOAD = {
  loading: boolean;
  allTokemons: string[];
  ownerTokemons: string[];
};

type DATA_FAILED_PAYLOAD = {
  loading: boolean;
  error: boolean;
  errorMessage: string;
};

export type ACTIONTYPE =
  | { type: 'CHECK_DATA_REQUEST'; payload: boolean }
  | { type: 'CHECK_DATA_SUCCESS'; payload: DATA_SUCCESS_PAYLOAD }
  | { type: 'CHECK_DATA_FAILED'; payload: DATA_FAILED_PAYLOAD };

export const initialState: IDataContextState = {
  loading: false,
  allTokemons: [],
  ownerTokemons: [],
  error: false,
  errorMessage: '',
};

const DataContext = React.createContext<IDataContextValue>({
  state: initialState,
  dispatch: () => {}, // initialise with an empty function
});

type DataContextProviderProps = {
  children: WithChildren<{}>;
};

const DataContextProvider = ({ children }: DataContextProviderProps) => {
  const [loading, setLoading] = React.useState(false);
  const [account, setAccount] = React.useState('');
  const [tokemonToken, setTokemonToken] = React.useState(null);
  const [web3, setWeb3] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState('');

  // Context Update Setters

  const [state, dispatch] = React.useReducer(dataReducer, initialState);

  const dataContextValue = React.useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  );

  return (
    <DataContext.Provider value={dataContextValue}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
