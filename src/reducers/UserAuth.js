import  {
	CREATE_ACCOUNT_SUCCESS,
	LOAD_CREATE_ACCOUNT,
	GET_CREATE_ACCOUNT_ERROR
} from '../actions/UserAuth'

const initialState ={
	items: [],
	isLoading: false,
	hasError: false
}

const UserAuth = (state = initialState, action) => {
	switch(action.type) {
		case CREATE_ACCOUNT_SUCCESS:
			return state;
		case LOAD_CREATE_ACCOUNT:
			Object.assign({}, state, {
				isLoading: action.isLoading
		})
		case GET_CREATE_ACCOUNT_ERROR:
			Object.assign({}, state, {
				hasError: action.hasError
		})
		default:
			return state;
	}
}

export default UserAuth
