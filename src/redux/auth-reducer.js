import { stopSubmit } from "redux-form";
import { authAPI } from "../API/api";

const SET_AUTH_DATA = 'SET_AUTH_DATA';
let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false
};
const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTH_DATA:
			return {
				...state,
				...action.data
			}
		default: return state
	}
};
export const setAuthData = (userId, email, login, isAuth) => ({ type: SET_AUTH_DATA, data: { userId, email, login, isAuth } })

export const getAuth = () => async (dispatch) => {
	let response = await authAPI.getAuth()
	if (response.resultCode === 0) {
		let { id, email, login } = response.data;
		dispatch(setAuthData(id, email, login, true))
	}
}
export const login = (email, password, rememberMe) => async (dispatch) => {
	let response = await authAPI.login(email, password, rememberMe)
	if (response.resultCode === 0) {
		dispatch(getAuth())
	}
	else {
		let message = response.messages.length > 0 ? response.messages[0] : 'some error';
		dispatch(stopSubmit('login', { _error: message }))
	}
}
export const logout = () => async (dispatch) => {
	let response = await authAPI.logout()
	if (response.resultCode === 0) {
		dispatch(getAuth(null, null, null, false))
	}
}
export default authReducer;