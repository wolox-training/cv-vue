import { actions } from './actions';
import { createReducer, completeReducer } from 'redux-recompose';
import { onLoading } from '../utils';

// TODO : used completeState is not necessary on this because token is not stage on state
const initialState = {
  tokenLoading: false,
  email: '',
  idUser: null,
  status: ''
};

const reducerDescription = {
  primaryActions: [actions.GET_TOKEN],
  overrides: {
    [actions.GET_TOKEN_SUCCESS]: (state, action) => ({
      ...state,
      tokenLoading: false,
      email: action.payload.email,
      idUser: action.payload.idUser,
      status: 'valid'
    }),
    [actions.GET_TOKEN_FAILURE]: (state, action) => ({
      ...state,
      tokenLoading: false,
      status: action.payload,
      email: '',
      idUser: null
    })
  }
};

export default createReducer(initialState, completeReducer(reducerDescription));
