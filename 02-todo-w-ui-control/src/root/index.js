import React from 'react';

import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import { history } from './create-history';
import store from './store';
import { Provider } from 'react-redux';

import App from 'todo-app/';

import style from './style.less';
const Root = ()=>(
  <div className={`root ${style['module-style']}`}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route path="/" component={ props => <App {...props} /> } />
      </ConnectedRouter>
    </Provider>
  </div>
 );

export default Root;

