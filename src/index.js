import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/app.component';
import mainReducer from './reducers/main.reducer';

let store = createStore(mainReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);