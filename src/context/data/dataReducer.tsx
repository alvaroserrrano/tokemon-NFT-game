import { ACTIONTYPE, IDataContextState } from './dataContext';

export const dataReducer = (
  state: IDataContextState,
  action: ACTIONTYPE
): IDataContextState => {
  switch (action.type) {
    case 'CHECK_DATA_REQUEST':
      return { ...state, loading: true };
    case 'CHECK_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        allTokemons: action.payload.allTokemons,
        ownerTokemons: action.payload.ownerTokemons,
      };
    case 'CHECK_DATA_FAILED':
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};
