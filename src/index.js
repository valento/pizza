import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import order from './reducers/order';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import initData from '../initData.json';

import routes from './routes'

import App from './components/App';

const store = createStore(
  order,
  {initData}
);
const Render = render(
//<Router history={browserHistory}>
    <Provider store={store}>
      <App data={store.getState()}/>
    </Provider>,
//</Router>,
  document.getElementById('app')
);

store.subscribe(Render);
Render();
