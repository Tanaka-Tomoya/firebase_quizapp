
import {firebaseApp} from '../firebase/config'
import { push } from 'react-router-redux'

export const CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS'
export const LOAD_CREATE_ACCOUNT = 'LOAD_CREATE_ACCOUNT'
export const GET_CREATE_ACCOUNT_ERROR = 'GET_CREATE_ACCOUNT_ERROR'

export const createAccountSuccess = (items) => ({
	type: CREATE_ACCOUNT_SUCCESS,
	items
})

export const loadCreateAccount = (status) => ({
	type: LOAD_CREATE_ACCOUNT,
	isLoading: status
})

export const getCreateAccountError = (status) => ({
	type: GET_CREATE_ACCOUNT_ERROR,
	hasError: status
})

export const createAccount = (email, password, user_name) => {
	return(dispatch) => {
		dispatch(loadCreateAccount(true));
		firebaseApp.auth().createUserWithEmailAndPassword(email,password)
		.then( (user) => {
			console.log(user_name)
			user.user.updateProfile({
				displayName: user_name
			})
			.then( () => {
				dispatch(push('/'));
			})
		})
		.catch(function(error) {
			dispatch(getCreateAccountError(true))
			console.log(error.message)
		})
		dispatch(loadCreateAccount(false))
	}
}
