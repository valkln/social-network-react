import axios from "axios";

const instance = axios.create({
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	withCredentials: true,
	headers: { 'API-KEY': 'bf564537-ae0f-475b-a4ab-53d32391d136' }
})

export const usersAPI = {
	getUsers(currentPage, pageSize) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => {
				return response.data;
			})
	},
	followDelete(id) {
		return instance.delete('follow/' + id)
			.then(response => {
				return response.data;
			})
	},
	followPost(id) {
		return instance.post('follow/' + id)
			.then(response => {
				return response.data;
			})
	}
}

export const authAPI = {
	getAuth() {
		return instance.get(`auth/me`)
			.then(response => {
				return response.data;
			})
	},
	login(email, password, rememberMe = false) {
		return instance.post(`auth/login/`, { email, password, rememberMe })
			.then(response => {
				return response.data;
			})
	},
	logout() {
		return instance.delete(`auth/login/`)
			.then(response => {
				return response.data;
			})
	}
}

export const profileAPI = {
	getProfile(id) {
		return instance.get(`profile/${id}`)
			.then(response => {
				return response.data;
			});
	},
	getStatus(id) {
		return instance.get(`profile/status/${id}`)
			.then(response => {
				return response.data;
			});
	},
	updateStatus(data) {
		return instance.put(`profile/status`, { status: data })
			.then(response => {
				return response.data;
			});
	},
	changePhoto(photo) {
		let formData = new FormData();
		formData.append('image', photo)
		return instance.put(`profile/photo`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
			.then(response => {
				return response.data;
			});
	}
}