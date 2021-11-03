import { instance, resultCode } from "./api"

type TGetAuth = {
	data: { id: number, email: string, login: string },
	resultCode: resultCode,
	messages: string[]
}
type TLogin = {
	data: { userId: number },
	resultCode: resultCode,
	messages: string[]
}
type TLogout = {
	data: {},
	resultCode: resultCode,
	messages: string[]
}
export const authAPI = {
	getAuth() {
		return instance.get<TGetAuth>(`auth/me`)
			.then(res => res.data)
	},
	login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
		return instance.post<TLogin>(`auth/login/`, { email, password, rememberMe, captcha })
			.then(res => res.data)
	},
	logout() {
		return instance.delete<TLogout>(`auth/login/`)
			.then(res => res.data)
	}
}