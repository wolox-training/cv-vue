import { actions } from './actions';

const initialStates = {
  isLogged : false
};

function reducer(state = initialStates, action) {
  switch (action.type) {
    case actions.GET_STATUS:
      return { ...state}
    case actions.CHANGE_STATUS:
      return { ...state, isLogged: action.payload }
    default :
      return state;
  }
}

export default reducer;
