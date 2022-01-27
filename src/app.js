import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes';
import rootReducer from './reducers/rootReducer';
import { DispatcherFactory } from '@tbiegner99/ui-app-components';

const store = createStore(rootReducer);
DispatcherFactory.setDispatchingStrategy(store);

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.body
);
