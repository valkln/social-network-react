import { resultCode } from './../API/api';
import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../API/api";
const SET_AUTH_DATA = 'SET_AUTH_DATA';
const SET_CAPTCHA = 'SET_CAPTCHA'

let initialState = {
	userId: null as number | null,
	email: null as string | null,
	login: null as string | null,
	isAuth: false,
	captchaUrl: null as string | null
}
export type initialStateType = typeof initialState

const authReducer = (state = initialState, action: any): initialStateType => {
	switch (action.type) {
		case SET_AUTH_DATA:
		case SET_CAPTCHA:
			return {
				...state,
				...action.payload
			}
		default: return state
	}
};
//action creators
type setAuthDataPayloadType = {
	userId: number | null,
	email: string | null,
	login: string | null,
	isAuth: boolean
}
type setAuthDataActionType = {
	type: typeof SET_AUTH_DATA,
	payload: setAuthDataPayloadType
}
export const setAuthData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthDataActionType =>
	({ type: SET_AUTH_DATA, payload: { userId, email, login, isAuth } });
type setCaptchaType = {
	type: typeof SET_CAPTCHA,
	payload: { captchaUrl: string }
}
const setCaptcha = (captchaUrl: string): setCaptchaType => ({ type: SET_CAPTCHA, payload: { captchaUrl } })
//thunks
export const getAuth = () => async (dispatch: any) => {
	const response = await authAPI.getAuth()
	if (response.resultCode === resultCode.Success) {
		let { id, email, login } = response.data;
		dispatch(setAuthData(id, email, login, true))
	}
}
export const login = (email: string, password: string, rememberMe: boolean, captcha?: any) => async (dispatch: any) => {
	const response = await authAPI.login(email, password, rememberMe, captcha)
	if (response.resultCode === resultCode.Success) {
		dispatch(getAuth())
	} else if (response.resultCode === resultCode.RequiredCaptcha) {
		dispatch(getCaptcha())
	} else {
		let message = response.messages.length > 0 ? response.messages[0] : 'some error';
		dispatch(stopSubmit('login', { _error: message }))
	}
}
export const getCaptcha = () => async (dispatch: any) => {
	const response = await securityAPI.getCaptcha();
	const captchaUrl = response.data.url;
	dispatch(setCaptcha(captchaUrl));

}
export const logout = () => async (dispatch: any) => {
	const response = await authAPI.logout()
	if (response.resultCode === resultCode.Success) {
		dispatch(setAuthData(null, null, null, false))
	}
}
export default authReducer;