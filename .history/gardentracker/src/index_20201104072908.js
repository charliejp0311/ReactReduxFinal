import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
// import reportWebVitals from './reportWebVitals';
import reducer from './redux/index'
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';


const enhancer = (window)['devToolsExtension'] ? (window)['devToolsExtension']()(createStore) : createStore;

const store = enhancer(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {console.log(store)}
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);