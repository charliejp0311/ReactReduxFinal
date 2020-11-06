import React from 'react';
import ReactDOM from 'react-dom';
//style
import './index.css';
//APP
import App from './containers/App';
//Reducer
import reducer from './redux/index'
//router
import { BrowserRouter } from "react-router-dom";
//store and middleware
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk),
));


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);