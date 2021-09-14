import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";

const { createStore, combineReducers } = require("redux");
let reducers = combineReducers({
	profile: profileReducer,
	messages: messagesReducer
});
let store = createStore(reducers);

export default store;