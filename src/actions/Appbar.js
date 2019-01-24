import { firebaseApp } from '../firebase/config'
import { startLoadFirebase,
				 endLoadFirebase,
				 getErrorLoadFirebase
} from './App'

export const GET_USER_PROFILE = 'GET_USER_PROFILE'

export const getUserProfile = name => ({
	type: GET_USER_PROFILE,
	name: name
})

export const fetchUserProfile = () => {
	return(dispatch) => {
		dispatch(startLoadFirebase())
		const user = firebaseApp.auth().currentUser
		console.log(user)
		if (user != null) {
			dispatch(getUserProfile(user.displayName))
		} else {
			dispatch(getErrorLoadFirebase)
		}
		dispatch(endLoadFirebase())
	}
}
