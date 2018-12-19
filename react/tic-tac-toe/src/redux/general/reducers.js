import { actions } from './actions';
import {createReducer } from 'redux-recompose';

const initialState = {
  isLogged : false
};

const reducerDescription = {
  [actions.CHANGE_STATUS]: (state, action) => ({
    ...state,
    isLogged: action.payload,
  })
};

export default createReducer(initialState, reducerDescription);
