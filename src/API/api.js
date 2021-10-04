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