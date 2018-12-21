import { actions } from './actions';
import { onChange } from '../utils';
import { createReducer } from 'redux-recompose';

// TODO : used completeState is not necessary on this because only it has one state.
const initialState = {
  isLogged : false
};

const reducerDescription = {
  [actions.CHANGE_STATUS]: onChange()
};

export default createReducer(initialState, reducerDescription);
