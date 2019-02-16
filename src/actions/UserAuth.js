
import { firebaseApp } from '../firebase/config'
import { push } from 'react-router-redux'
import { startLoadFirebase,
				 endLoadFirebase,
				 getErrorLoadFirebase
 } from './App'
import firebase from 'firebase/app';

export const CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS'

export const createAccountSuccess = () => ({
	type: CREATE_ACCOUNT_SUCCESS,
	first: true
})


export const createAccount = (email, password, user_name) => {
	return(dispatch) => {
		dispatch(startLoadFirebase());
		firebaseApp.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
		.then(() => {
			firebaseApp.auth().createUserWithEmailAndPassword(email,password)
			.then( (user) => {
				user.user.updateProfile({
					displayName: user_name
			})
			.then( () => {
					dispatch(push('/signupSuccess'));
				})
			})
		})
		.catch(error => {
			dispatch(getErrorLoadFirebase())
			console.log(error.message)
			console.log(error.code)
		})
		dispatch(endLoadFirebase())
	}
}

export const login = (email, password) => {
	return(dispatch) => {
		firebaseApp.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
		.then(() => {
			console.log('success!!!!!')
			firebaseApp.auth().signInWithEmailAndPassword(email, password)
			.catch(error => {
				alert('aaaaaa')
				dispatch(getErrorLoadFirebase())
				console.log(error.code)
				console.log(error.message)
			})
			.then(() => {
				dispatch(endLoadFirebase())
			})
			.then(() => {
				dispatch(push('/'));
			})
		})
		dispatch(getErrorLoadFirebase())
	}
}
