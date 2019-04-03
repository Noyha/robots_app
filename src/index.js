import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux'
// how we associate the store with our react app
import { Provider } from 'react-redux'
// for async
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const initialState = {}

const middleware = applyMiddleware(thunk);

const store = createStore(rootReducer, initialState, middleware);

//using provider, we are passing our store into our applicaion
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
