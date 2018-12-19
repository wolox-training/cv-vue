import { actions } from './actions';
import { createReducer, completeReducer } from 'redux-recompose';
import { onLoading } from '../utils';
const initialState = {
  tokenLoading: false,
  email: '',
  idUser: null,
  status: ''
};

const reducerDescription = {
  [actions.GET_TOKEN]: onLoading(),
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
};

// const reducerDescription = {
//   primaryActions: [actions.GET_TOKEN],
//   // override: {
//   //   [actions.INCREMENT_COUNTER]: onAdd()
//   // }
// }
// export default createReducer(initialState, completeReducer(reducerDescription))
export default createReducer(initialState, reducerDescription);
