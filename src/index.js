import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/router/route';
import { Provider } from 'react-redux';
import store from './components/redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);