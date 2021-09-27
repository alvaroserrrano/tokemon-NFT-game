import { ACTIONTYPE, IBlockchainContextState } from './blockchainContext';

export const blockchainReducer = (
  state: IBlockchainContextState,
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
