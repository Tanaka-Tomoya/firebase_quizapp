import { firebaseApp } from '../firebase/config'
import { push } from 'react-router-redux'
import { startLoadFirebase,
				 endLoadFirebase,
				 getErrorLoadFirebase
 } from './App'

export const CONFIRM_USER_LOGIN = 'CONFIRM_USER_LOGIN'

export const confirmUserLogin = (isUser) => ({
	type: CONFIRM_USER_LOGIN,
	isUser,
})

export const loginConfirm = () => {
	return(dispatch) => {
		dispatch(startLoadFirebase())
		firebaseApp.auth().onAuthStateChanged((user) => {
			if (user) {
				dispatch(confirmUserLogin(true))
				dispatch(endLoadFirebase())
			} else {
				dispatch(confirmUserLogin(false))
						dispatch(endLoadFirebase())
			}
			})
	}
}
