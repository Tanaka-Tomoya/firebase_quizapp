import { database } from '../firebase/config'

const questionsRef = database.ref("questions")

export const FETCH_LIST_ITEMS_SUCCESS = 'FETCH_LIST_ITEMS_SUCCESS'
export const LOAD_LIST_ITEMS = 'LOAD_LIST_ITEMS'
export const GET_LIST_ITEMS_ERROR = 'GET_LIST_ITEMS_ERROR'

export const fetchListItemsSuccess = items => ({
	type: FETCH_LIST_ITEMS_SUCCESS,
	items
})

export const loadListItems = status => ({
	type: LOAD_LIST_ITEMS,
	isLoading: status
})

export const getListItemsError = status => ({
	type: GET_LIST_ITEMS_ERROR,
	hasError: status
})

export const fetchListItems = () => {
	return (dispatch) => {
		dispatch(loadListItems(true));

		questionsRef.on('value', function(snapshot) {
			console.log(snapshot.val())
			dispatch(fetchListItemsSuccess(snapshot.val()))
		})
	}
}


// hoge.on('value', function(snapshot) {
// 	console.log(snapshot.val())
// });
