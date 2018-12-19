import { actions } from './actions';
import {createReducer } from 'redux-recompose';
const initialState = {
  tokenLoading: false,
  email: '',
  idUser: null,
  status: ''
};

// function reducer(state = initialState, {type, payload}) {
//   switch (type) {
//     case actions.GET_TOKEN_SUCCESS:
//       return { ...state, email: payload.email, idUser: payload.idUser, status: 'valid'};
//     case actions.GET_TOKEN_FAILURE:
//       return { ...state, email: '', idUser: null, status: payload };
//     default:
//       return state;
//   }
// }


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

// function createReducer(initialState, reducerObject) {
//   return (state = initialState, action) => {
//     (reducerObject[action.type] && reducerObject[action.type](state, action)) || state;
//   };
// }

export default createReducer(initialState, reducerDescription);

// export default reducer;
