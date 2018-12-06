import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import books from './book/reducer';
import shoppingCart from './shopping-cart/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
const Enhancers = [applyMiddleware(thunk)];

export default createStore(
  combineReducers({
    books,
    shoppingCart
  }),
  composeEnhancers(...Enhancers)
);
