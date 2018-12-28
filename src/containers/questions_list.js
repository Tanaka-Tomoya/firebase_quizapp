import { connect } from 'react-redux'
import { questions_list } from '../components/questions_list/questions_list'

function mapStateToProps(state) {
	return state;
}

function mapDispatchToProp(dispatch) {
	return dispatch;
}

export default connect(
	mapStateToProps,
	mapDispatchToProp
)(questions_list)
