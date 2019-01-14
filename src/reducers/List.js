import {
	FETCH_LIST_ITEMS_SUCCESS,
	LOAD_LIST_ITEMS,
	GET_LIST_ITEMS_ERROR
} from '../actions/List'

export const items = (state = [], action) => {
	switch(action.type) {
		case FETCH_LIST_ITEMS_SUCCESS:
			return action.items
		default:
			return state;
	}
}


export const loadListItems = (state = false, action) => {
	switch(action.type) {
		case LOAD_LIST_ITEMS:
			return action.isLoading;
		default:
			return state;
	}
}

export const getListItemsError = (state = false, action) => {
	switch(action.type) {
		case GET_LIST_ITEMS_ERROR:
			return action.hasError;
		default:
			return state;

	}
}
