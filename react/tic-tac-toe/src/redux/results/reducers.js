import { actions } from './actions';
import { onChange } from '../utils';
import { createReducer } from 'redux-recompose';

const initialState = {
  positions: []
}

const reducerDescription = {
  [actions.GET_RESULTS]: onChange()
};

export default createReducer(initialState, reducerDescription);
