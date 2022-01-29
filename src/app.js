/* eslint-disable prefer-destructuring */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import singleSpaReact from 'single-spa-react';
import { DispatcherFactory } from '@tbiegner99/ui-app-components';
import rootReducer from './reducers/rootReducer';
import WeatherMain from './pages/weather/Main';

const store = createStore(rootReducer);
DispatcherFactory.setDispatchingStrategy(store);

const Main = (props) => (
  <Provider store={store}>
    <WeatherMain {...props} />
  </Provider>
);

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Main,
  errorBoundary(/* err, info, props */) {
    // https://reactjs.org/docs/error-boundaries.html
    return <div>This renders when a catastrophic error occurs</div>;
  }
});

export const bootstrap = reactLifecycles.bootstrap;
export const mount = reactLifecycles.mount;
export const unmount = reactLifecycles.unmount;
