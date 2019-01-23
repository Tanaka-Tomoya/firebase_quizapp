import { firebaseApp } from '../firebase/config'
import { push } from 'react-router-redux'
import { startLoadFirebase,
				 endLoadFirebase,
				 getErrorLoadFirebase
 } from './App'

export const LOGIN_CONFIRM_SUCCESS = 'LOGIN_CONFIRM_SUCCESS'

export const loginConfirmSuccess = (uid) => ({
	type: LOGIN_CONFIRM_SUCCESS,
	uid
})

export const loginConfirm = () => {
	return(dispatch) => {
		dispatch(startLoadFirebase())
		const user = firebaseApp.auth().currentUser
		if(user) {
			localStorage.setItem('uid', user.uid)
			dispatch(loginConfirmSuccess(user.uid))
		}
		dispatch(endLoadFirebase())
	}
}
