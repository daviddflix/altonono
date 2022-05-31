import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import ScrollToTop from './Component/carousel/ScrollToTop';


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
     <BrowserRouter>
     <ScrollToTop>
    <App />
    </ScrollToTop>
  </BrowserRouter>
  </PersistGate>
  </Provider>,
  document.getElementById('root')
);

