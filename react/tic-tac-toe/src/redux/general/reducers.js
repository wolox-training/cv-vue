import { actions } from './actions';
import { onChange } from '../utils';
import { createReducer } from 'redux-recompose';

const initialState = {
  isLogged : false
};

const reducerDescription = {
  [actions.CHANGE_STATUS]: onChange()
};

export default createReducer(initialState, reducerDescription);
