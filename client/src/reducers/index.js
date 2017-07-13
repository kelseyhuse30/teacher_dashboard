import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import items from './items';
import itemForm from './itemForm';

const rootReducer = combineReducers({
	items,
	itemForm,
	routing: routerReducer,
})

export default rootReducer;