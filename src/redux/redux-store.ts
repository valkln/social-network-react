import authReducer from "./auth-reducer";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import appReducer from "./app-reducer";
import thunkMiddleware from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

type PropertyTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertyTypes<T>>
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let rootReducer = combineReducers({
	profile: profileReducer,
	messages: messagesReducer,
	users: usersReducer,
	auth: authReducer,
	app: appReducer
});
type rootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<rootReducerType>;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;