import  {
	CREATE_ACCOUNT_SUCCESS,
} from '../actions/UserAuth'

import {
	START_LOAD_FIREBASE,
	END_LOAD_FIREBASE,
	GET_LOAD_FIREBASE_ERROR
} from '../actions/App'

const initialState ={
	items: [],
	isLoading: false,
	hasError: false,
}

const UserAuth = (state = initialState, action) => {
	switch(action.type) {
		case CREATE_ACCOUNT_SUCCESS:
			return Object.assign({}, state, {
				first: action.first
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

export default UserAuth
