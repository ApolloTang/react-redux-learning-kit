import React from 'react';

import { ConnectedRouter } from 'connected-react-router';
import { Route, Redirect, Switch } from 'react-router-dom';
import { history } from './create-history';
import store from './store';
import { Provider } from 'react-redux';

import App from 'my-app/';

import style from './style.less';
const Root = ()=>(
  <div className={`root ${style['module-style']}`}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/my-app" component={ props => <App {...props} /> } />
          <Redirect to="/my-app" />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </div>
 );

export default Root;

