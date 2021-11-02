import axios from "axios";
import { ProfileType } from "../types/types";
export enum resultCode { Success = 0, Error = 1, RequiredCaptcha = 10 }
const instance = axios.create({
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	withCredentials: true,
	headers: { 'API-KEY': 'bf564537-ae0f-475b-a4ab-53d32391d136' }
})

export const usersAPI = {
	getUsers(currentPage: number, pageSize: number) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => {
				return response.data;
			})
	},
	followDelete(id: number) {
		return instance.delete('follow/' + id)
			.then(response => {
				return response.data;
			})
	},
	followPost(id: number) {
		return instance.post('follow/' + id)
			.then(response => {
				return response.data;
			})
	}
}

type TGetAuth = {
	data: { id: number, email: string, login: string },
	resultCode: number,
	messages: string[]
}
type TLogin = {
	data: { userId: number },
	resultCode: number,
	messages: string[]
}
type TLogout = {
	data: any,
	resultCode: number,
	messages: string[]
}
export const authAPI = {
	getAuth() {
		return instance.get<TGetAuth>(`auth/me`)
			.then(response => response.data)
	},
	login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
		return instance.post<TLogin>(`auth/login/`, { email, password, rememberMe, captcha })
			.then(response => response.data)
	},
	logout() {
		return instance.delete<TLogout>(`auth/login/`)
			.then(response => response.data)
	}
}

export const profileAPI = {
	getProfile(id: number) {
		return instance.get(`profile/${id}`)
			.then(response => {
				return response.data;
			});
	},
	getStatus(id: number) {
		return instance.get(`profile/status/${id}`)
			.then(response => {
				return response.data;
			});
	},
	updateStatus(status: string) {
		return instance.put(`profile/status`, { status: status })
			.then(response => {
				return response.data;
			});
	},
	changePhoto(photo: any) {
		let formData = new FormData();
		formData.append('image', photo)
		return instance.put(`profile/photo`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
			.then(response => {
				return response.data;
			});
	},
	updateProfle(data: ProfileType) {
		return instance.put(`profile`, data)
			.then(response => {
				return response.data;
			});
	}
}

export const securityAPI = {
	getCaptcha() {
		return instance.get('security/get-captcha-url')
	}
}