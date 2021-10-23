import authReducer from "./auth-reducer";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import appReducer from "./app-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let reducers = combineReducers({
	profile: profileReducer,
	messages: messagesReducer,
	users: usersReducer,
	auth: authReducer,
	app: appReducer,
	form: formReducer
});
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;