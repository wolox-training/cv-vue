import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import RoutesApp from './routes';
import './styles.module.scss';

ReactDOM.render(
  <Provider store={store}>
    <RoutesApp />
  </Provider>,
  document.getElementById('root')
);
