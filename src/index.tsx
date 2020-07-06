//CUR COMPONENT
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from 'state'
import './index.scss';

//PAGES
import HOME from 'pages/HOME'
import ANY from 'pages/ANY'

//COMPONENTS
import Header from 'components/Header'
import Footer from 'components/Footer'



const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>

        <Header />
        
        <Switch>

          <Route exact path="/">
            <HOME />
          </Route>
          
          <Route path="*">
            <ANY />
          </Route>

        </Switch>

        <Footer />

      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);