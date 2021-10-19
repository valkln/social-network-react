import { authAPI } from "../API/api";

const SET_AUTH_DATA = 'SET-AUTH-DATA';
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

export const getAuth = () => (dispatch) => {
	authAPI.getAuth()
		.then(response => {
			if (response.resultCode === 0) {
				let { id, email, login } = response.data;
				dispatch(setAuthData(id, email, login, true))
			}
		})
}
export const login = (email, password, rememberMe) => (dispatch) => {
	authAPI.login(email, password, rememberMe)
		.then(response => {
			if (response.resultCode === 0) {
				dispatch(getAuth())
			}
		})
}
export const logout = () => (dispatch) => {
	authAPI.logout()
		.then(response => {
			if (response.resultCode === 0) {
				dispatch(getAuth(null, null, null, false))
			}
		})
}
export default authReducer;