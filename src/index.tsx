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

const resizeImg = () => {
  const baseLine = 24
  const imgs = document.querySelectorAll('.img')

  for (const imgWrapper of [...imgs as any]) {
    const img = imgWrapper.querySelector('img')

    if (!img.aspectRatio) {
      img.aspectRatio = img.width / img.height
    }
    
    const newHeight = img.parentElement.offsetWidth / img.aspectRatio
    const leftOver = newHeight % baseLine

    imgWrapper.style.height = newHeight + baseLine - leftOver + "px"
  }
}
window.addEventListener('load', resizeImg)
window.addEventListener('resize', resizeImg)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>

        <Header />
        
        <main>
          <Switch>

            <Route exact path="/">
              <HOME />
            </Route>
            
            <Route path="*">
              <ANY />
            </Route>

          </Switch>
        </main>

        <Footer />

      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);