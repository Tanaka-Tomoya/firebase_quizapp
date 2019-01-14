import { combineReducers } from 'redux';
import { items, loadListItems, getListItemsError } from './List'


const rootReducer = combineReducers ({
	items,
	loadListItems,
	getListItemsError
})

export default rootReducer;
