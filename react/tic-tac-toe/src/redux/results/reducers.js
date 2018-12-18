import { actions } from './actions';

const initialState = {
  positions: []
}

function reducer(state = initialState, { type, payload } ) {
  switch (type) {
    case actions.GET_RESULTS:
      return {...state, positions: payload };
    default: 
      return state;
  }
}

export default reducer;
