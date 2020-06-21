import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from 'state'
import './index.scss';

import HOME from 'pages/HOME'
import ANY from 'pages/ANY'


const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <p>Header</p>
        <Switch>

          <Route exact path="/">
            <HOME />
          </Route>
          
          <Route path="*">
            <ANY />
          </Route>

        </Switch>
        <p>Footer</p>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);