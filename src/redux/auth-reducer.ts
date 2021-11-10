import { securityAPI } from './../API/security-api';
import { authAPI } from './../API/auth-api';
import { InferActionTypes, BaseThunkType } from './redux-store';
import { resultCode } from './../API/api';
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
//actions
const actions = {
	setAuthData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) =>
		({ type: 'SET_AUTH_DATA', payload: { userId, email, login, isAuth } } as const),
	setCaptcha: (captchaUrl: string) => ({ type: 'SET_CAPTCHA', payload: { captchaUrl } } as const)
}
type ActionTypes = InferActionTypes<typeof actions>
//thunks
type ThunkType = BaseThunkType<ActionTypes>
export const getAuth = (): ThunkType => async (dispatch) => {
	const res = await authAPI.getAuth()
	if (res.resultCode === resultCode.Success) {
		let { id, email, login } = res.data;
		dispatch(actions.setAuthData(id, email, login, true))
	}
}
export const login = (email: string, password: string, rememberMe: boolean, captcha?: any): ThunkType => async (dispatch) => {
	const res = await authAPI.login(email, password, rememberMe, captcha)
	if (res.resultCode === resultCode.Success) {
		dispatch(getAuth())
	} else if (res.resultCode === resultCode.RequiredCaptcha) {
		dispatch(getCaptcha())
	}
}
export const getCaptcha = (): ThunkType => async (dispatch) => {
	const res = await securityAPI.getCaptcha();
	const captchaUrl = res.data.url;
	dispatch(actions.setCaptcha(captchaUrl));
}
export const logout = (): ThunkType => async (dispatch) => {
	const res = await authAPI.logout()
	if (res.resultCode === resultCode.Success) {
		dispatch(actions.setAuthData(null, null, null, false))
	}
}
export default authReducer;