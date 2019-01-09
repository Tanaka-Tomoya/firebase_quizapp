import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/index';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import firebase from 'firebase'

const loggerMiddleware = createLogger();

export default function configureStore() {
	return createStore(
		rootReducer,
		reactReduxFirebase(firebase, {})
	);
}
