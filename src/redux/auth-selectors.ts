import { AppStateType } from './redux-store';

export const getIsAuth = (state: AppStateType) => {
	return state.auth.isAuth
}
export const getCaptchaUrl = (state: AppStateType) => {
	return state.auth.captchaUrl
}
export const getMyId = (state: AppStateType) => {
	return state.auth.userId
}
export const getMyLogin = (state: AppStateType) => {
	return state.auth.login
}
export const getAuthError = (state: AppStateType) => {
	return state.auth.authError
}