import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import Game from './game/reducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
const Enhancers = [applyMiddleware(thunk)];
const reducers = {
  game: Game,
  form: formReducer
}

export default createStore(
  combineReducers(reducers),
  composeEnhancers(...Enhancers)
);
