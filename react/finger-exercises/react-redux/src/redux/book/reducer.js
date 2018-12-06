import { actions } from './actions';

const initialState = {
  books: [],
  bookSelected: [],
  originalData: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_BOOKS: // TODO to implement the logic
      return { ...state };
    case actions.GET_BOOKS_SUCCESS: // TODO to implement the logic
      return { ...state, books: action.payload, originalData: action.payload };
    case actions.GET_BOOKS_FAILURE: // TODO to implement the logic
      return { ...state };
    case actions.ADD_TO_CART: // TODO to implement the logic
      return { ...state, bookSelected: action.payload };
    case actions.ADD_ITEM: // TODO to implement the logic
      return { ...state, bookSelected: action.payload };
    case actions.REMOVE_ITEM: // TODO to implement the logic
      return { ...state, bookSelected: action.payload };
    case actions.SEARCH_ITEM: // TODO to implement the logic
      return { ...state, books: action.payload };
    default:
      return state;
  }
}

export default reducer;
