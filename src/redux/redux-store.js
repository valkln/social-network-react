import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

const { createStore, combineReducers } = require("redux");
let reducers = combineReducers({
	profile: profileReducer,
	messages: messagesReducer,
	users: usersReducer
});
let store = createStore(reducers);
window.store = store

export default store;