import { connect } from 'react-redux'
import { home } from '../components/home/home'

function mapStateToProps(state) {
	return state;
}

function mapDispatchToProp(dispatch) {
	return dispatch;
}

export default connect(
	mapStateToProps,
	mapDispatchToProp
)(home)
