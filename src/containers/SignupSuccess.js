import { connect } from 'react-redux'
import SignupSuccess from '../components/SignupSuccess/SignupSuccess'

const mapStateToProps = (state) => {
	return state;
}


const mapDispatchToProp = (dispatch) => {
	return dispatch
}

export default connect()(SignupSuccess)
