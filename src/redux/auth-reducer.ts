import { AppStateType, InferActionTypes } from './redux-store';
import { resultCode } from './../API/api';
import { authAPI, securityAPI } from "../API/api";
import { ThunkAction } from 'redux-thunk';

let initialState = {
	userId: null as number | null,
	email: null as string | null,
	login: null as string | null,
	isAuth: false,
	captchaUrl: null as string | null
}
export type initialStateType = typeof initialState

const authReducer = (state = initialState, action: ActionTypes): initialStateType => {
	switch (action.type) {
		case 'SET_AUTH_DATA':
		case 'SET_CAPTCHA':
			return {
				...state,
				...action.payload
			}
		default: return state
	}
};
//action creators
type ActionTypes = InferActionTypes<typeof actions>
const actions = {
	setAuthData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) =>
		({ type: 'SET_AUTH_DATA', payload: { userId, email, login, isAuth } }),
	setCaptcha: (captchaUrl: string) => ({ type: 'SET_CAPTCHA', payload: { captchaUrl } })
}

//thunks
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;
export const getAuth = (): ThunkType => async (dispatch) => {
	const response = await authAPI.getAuth()
	if (response.resultCode === resultCode.Success) {
		let { id, email, login } = response.data;
		dispatch(actions.setAuthData(id, email, login, true))
	}
}
export const login = (email: string, password: string, rememberMe: boolean, captcha?: any): ThunkType => async (dispatch) => {
	const response = await authAPI.login(email, password, rememberMe, captcha)
	if (response.resultCode === resultCode.Success) {
		dispatch(getAuth())
	} else if (response.resultCode === resultCode.RequiredCaptcha) {
		dispatch(getCaptcha())
	}
}
export const getCaptcha = (): ThunkType => async (dispatch) => {
	const response = await securityAPI.getCaptcha();
	const captchaUrl = response.data.url;
	dispatch(actions.setCaptcha(captchaUrl));

}
export const logout = (): ThunkType => async (dispatch) => {
	const response = await authAPI.logout()
	if (response.resultCode === resultCode.Success) {
		dispatch(actions.setAuthData(null, null, null, false))
	}
}
export default authReducer;