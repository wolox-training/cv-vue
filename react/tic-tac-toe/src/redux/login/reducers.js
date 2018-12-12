import { actions } from './actions';

const initialState = {
  email: '',
  idUser: null,
  status: ''
};

function reducer(state = initialState, {type, payload}) {
  switch (type) {
    case actions.GET_TOKEN_SUCCESS:
      return { ...state, email: payload.email, idUser: payload.idUser, status: 'valid'};
    case actions.GET_TOKEN_FAILURE: // TODO to implement the logic
      return { ...state, email: '', idUser: null, status: payload };
    default:
      return state;
  }
}

export default reducer;