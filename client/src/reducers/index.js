import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import items from './items';
import itemForm from './itemForm';
import timer from './timer';
import editedItem from './editedItem';
import timerForm from './timerForm';

const rootReducer = combineReducers({
	items,
	editedItem,
	itemForm,
	timerForm,
	timer,
	routing: routerReducer,
})

export default rootReducer;