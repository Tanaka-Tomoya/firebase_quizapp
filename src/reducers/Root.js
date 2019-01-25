import {
	CONFIRM_USER_LOGIN,
} from '../actions/Root'

import {
	START_LOAD_FIREBASE,
	END_LOAD_FIREBASE,
	GET_LOAD_FIREBASE_ERROR
} from '../actions/App'

const initialState = {
	isUser: false,
	isLoading: true,
	hasError: false
}

const Root = (state = initialState, action) => {
	switch(action.type) {
		case CONFIRM_USER_LOGIN:
			return Object.assign({}, state, {
				isUser: action.isUser,
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
			return state
	}
}

export default Root
