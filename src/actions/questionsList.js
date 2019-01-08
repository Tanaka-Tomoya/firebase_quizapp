export const GET_QUESTIONS_ITEM = 'GET_QUESTIONS_ITEM'

export function getQuestionsItem( item ) {
	return {
		type: GET_QUESTIONS_ITEM,
		item
	}
}
