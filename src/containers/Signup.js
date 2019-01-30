import { connect } from 'react-redux'
import Signup from '../components/Signup/Signup'
import { createAccount } from '../actions/UserAuth'
import { withRouter } from 'react-router-dom';

function mapStateToProps(state,props) {
	const { location } = props.history
	return {
		location: location,
	}
}

function mapDispatchToProp(dispatch) {
	return {
		createAccount: (email, password, user_name) => dispatch(createAccount(email, password, user_name))
	}
}

export default withRouter(connect(mapStateToProps,mapDispatchToProp)(Signup))
