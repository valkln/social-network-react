import authReducer from "./auth-reducer";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

const { createStore, combineReducers } = require("redux");
let reducers = combineReducers({
	profile: profileReducer,
	messages: messagesReducer,
	users: usersReducer,
	auth: authReducer
});
let store = createStore(reducers);
window.store = store

export default store;