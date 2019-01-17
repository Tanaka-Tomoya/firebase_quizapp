import {
	FETCH_LIST_ITEMS_SUCCESS,
	LOAD_LIST_ITEMS,
	GET_LIST_ITEMS_ERROR
} from '../actions/List'

const initialState = {
	items: [],
	isLoading: false,
	hasError: false
}

const List = (state = initialState, action) => {
	switch(action.type) {
		case FETCH_LIST_ITEMS_SUCCESS:
			return Object.assign({}, state, {
				items: action.items
			})
		case LOAD_LIST_ITEMS:
			return Object.assign({}, state, {
				isLoading: action.isLoading
			})
		case GET_LIST_ITEMS_ERROR:
			return Object.assign({}, state, {
				hasError: action.hasError
			})
		default:
			return state;
	}
}

export default List
