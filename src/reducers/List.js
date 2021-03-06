import {
	FETCH_LIST_ITEMS_SUCCESS,
} from '../actions/List'

import {
	START_LOAD_FIREBASE,
	END_LOAD_FIREBASE,
	GET_LOAD_FIREBASE_ERROR
} from '../actions/App'

const initialState = {
	items: [],
	isLoading: true,
	hasError: false
}

const List = (state = initialState, action) => {
	switch(action.type) {
		case FETCH_LIST_ITEMS_SUCCESS:
			return Object.assign({}, state, {
				items: action.items
			})
		case START_LOAD_FIREBASE:
			return Object.assign({}, state, {
				isLoading: action.isLoading
			})
		case END_LOAD_FIREBASE:
			return Object.assign({}, state, {
				isLoading: action.isLoading
			})
		case GET_LOAD_FIREBASE_ERROR:
			return Object.assign({}, state, {
				hasError: action.hasError
			})
		default:
			return state;
	}
}

export default List
