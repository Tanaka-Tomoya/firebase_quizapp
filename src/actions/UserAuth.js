
import { firebaseApp } from '../firebase/config'
import { push } from 'react-router-redux'
import { startLoadFirebase,
				 endLoadFirebase,
				 getErrorLoadFirebase
 } from './App'
import firebase from 'firebase/app';

export const CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS'

export const createAccountSuccess = (items) => ({
	type: CREATE_ACCOUNT_SUCCESS,
	items
})


export const createAccount = (email, password, user_name) => {
	return(dispatch) => {
		dispatch(startLoadFirebase());
		firebaseApp.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
		.then(() => {
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
		})
		.catch(function(error) {
			dispatch(getErrorLoadFirebase())
			console.log(error.message)
			console.log(error.code)
		})
		dispatch(endLoadFirebase())
	}
}
