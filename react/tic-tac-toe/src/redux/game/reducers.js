import { actions } from './actions';

const initialState = {
  history: [{
    squares: Array(9).fill(null)
  }],
  stepNumber: 0,
  xIsNext: true
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_STEP:
      return { ...state, history: action.payload.history, stepNumber: action.payload.stepNumber, xIsNext:action.payload.xIsNext };
    case actions.JUMP_TO: // TODO to implement the logic
      return { ...state, stepNumber: action.payload.stepNumber, xIsNext:action.payload.xIsNext };
    default:
      return state;
  }
}

export default reducer;
