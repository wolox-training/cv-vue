import { actions } from './actions';

const initialState = {
  email: '',
  idUser: null,
  status: ''
};

function reducer(state = initialState, {type, payload}) {
  switch (type) {
    case actions.GET_TOKEN_SUCCESS:
      return { ...state, };
    case actions.GET_TOKEN_FAILURE: // TODO to implement the logic
      return { ...state, email: payload.email, idUser: payload.idUser };
    default:
      return state;
  }
}

export default reducer;