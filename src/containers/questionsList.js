import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect } from 'react-redux-firebase'
import List from '../components/List/List'
import { getQuestionItems } from '../actions/List'

function mapStateToProps(state) {
		return {
		questions: state.firebase.data.questions
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getItems: (item) => {dispatch(getQuestionItems(item)); },
	}
}

const firebaseQueries = ['questions'];

const List = compose(
	firebaseConnect(firebaseQueries),
	connect(
		mapStateToProps,
    mapDispatchToProps
	))(List)

export default List;
