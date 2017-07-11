import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import rootReducer from './reducers'
import './index.css';
import { WrapperApp } from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

ReactDOM.render(
	<Provider store={store}>
		<WrapperApp />
	</Provider>, 
	document.getElementById('content'));
registerServiceWorker();
