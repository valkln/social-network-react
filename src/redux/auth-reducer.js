import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../API/api";

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	captchaUrl: null
};
const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_AUTH_DATA':
		case 'SET_CAPTCHA':
			return {
				...state,
				...action.data
			}
		default: return state
	}
};
//action creators
export const setAuthData = (userId, email, login, isAuth) =>
	({ type: 'SET_AUTH_DATA', data: { userId, email, login, isAuth } });
const setCaptcha = (captchaUrl) => ({ type: 'SET_CAPTCHA', data: { captchaUrl } })
//thunks
export const getAuth = () => async (dispatch) => {
	const response = await authAPI.getAuth()
	if (response.resultCode === 0) {
		let { id, email, login } = response.data;
		dispatch(setAuthData(id, email, login, true))
	}
}
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
	const response = await authAPI.login(email, password, rememberMe, captcha)
	if (response.resultCode === 0) {
		dispatch(getAuth())
	} else if (response.resultCode === 10) {
		dispatch(getCaptcha())
	} else {
		let message = response.messages.length > 0 ? response.messages[0] : 'some error';
		dispatch(stopSubmit('login', { _error: message }))
	}
}
export const getCaptcha = () => async (dispatch) => {
	const response = await securityAPI.getCaptcha();
	const captchaUrl = response.data.url;
	dispatch(setCaptcha(captchaUrl));

}
export const logout = () => async (dispatch) => {
	const response = await authAPI.logout()
	if (response.resultCode === 0) {
		dispatch(getAuth(null, null, null, false))
	}
}
export default authReducer;