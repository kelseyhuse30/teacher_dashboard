import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import items from './items';
import timer from './timer';
import timerForm from './timerForm';
import loginForm from './loginForm';
import newItemForm from './newItemForm';

const rootReducer = combineReducers({
	items,
	timerForm,
	loginForm,
	newItemForm,
	timer,
	routing: routerReducer,
})

export default rootReducer;