
export const START_LOAD_FIREBASE = 'START_LOAD_FIREBASE'
export const END_LOAD_FIREBASE = 'END_LOAD_FIREBASE'
export const GET_LOAD_FIREBASE_ERROR = 'GET_ERROR_LOAD_FIREBASE'

export const startLoadFirebase = () => ({
	type: START_LOAD_FIREBASE,
	isLoading: true
})

export const endLoadFirebase = () => ({
	type: END_LOAD_FIREBASE,
	isLoading: false
})

export const getErrorLoadFirebase = () => ({
	type: GET_LOAD_FIREBASE_ERROR,
	hasError: true
})
