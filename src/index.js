import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { Dispatch } from 'react';
import './index.css';
import App from './App';
import { populateProduce } from './store/produce';

const store = configureStore();

if(process.env.NODE_ENV !== "production"){
  window.store = store
  window.populateProduce = populateProduce 
}

console.log(store.getState())
function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
