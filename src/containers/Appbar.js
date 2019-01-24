import { connect } from 'react-redux'
import Appbar from '../components/general/Appbar'
import { fetchUserProfile } from '../actions/Appbar'


const mapStateToProps = (state) => {
	return state
}

const mapDispatchToProps = (dispatch) => {
	return {
		getUserProfile: () => dispatch(fetchUserProfile())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Appbar)
