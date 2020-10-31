import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
// import reportWebVitals from './reportWebVitals';
import reducer from './redux/index'
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from 'redux';
// import thunk from 'redux-thunk';

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);