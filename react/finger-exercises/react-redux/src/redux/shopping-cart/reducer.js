import { actions } from './actions';

const initialState = {
  open: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.TOGGLE_STATE:
      return { ...state, open: !state.open };
    default:
      return state;
  }
}

export default reducer;
