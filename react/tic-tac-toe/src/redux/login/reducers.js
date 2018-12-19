import { actions } from './actions';
import {createReducer } from 'redux-recompose';

const initialState = {
  tokenLoading: false,
  email: '',
  idUser: null,
  status: ''
};

const reducerDescription = {
  [actions.GET_TOKEN]: (state) => ({ ...state, tokenLoading: true }),
  [actions.GET_TOKEN_SUCCESS]: (state, action) => ({
    ...state,
    tokenLoading: false,
    email: action.payload.email,
    idUser: action.payload.idUser,
    status: 'valid'
  }),
  [actions.GET_TOKEN_FAILURE]: (state, action) => ({
    ...state,
    matchesLoading: false,
    status: action.payload,
    email: '',
    idUser: null
  })
};

export default createReducer(initialState, reducerDescription);
