import { ProfileType, PhotosType } from './../types/types';
import { instance, resultCode } from "./api";

type TUpdateProfile = {
	data: {},
	resultCode: resultCode,
	messages: string[]
}
type TUpdateStatus = {
	data: {},
	resultCode: resultCode,
	messages: string[]
}
type TChangePhoto = {
	data: { photos: PhotosType },
	resultCode: resultCode,
	messages: string[]
}

export const profileAPI = {
	getProfile(id: number) {
		return instance.get<ProfileType>(`profile/${id}`)
			.then(res => res.data)
	},
	updateProfile(data: ProfileType) {
		return instance.put<TUpdateProfile>(`profile`, data)
			.then(res => res.data)
	},
	getStatus(id: number) {
		return instance.get<string>(`profile/status/${id}`)
			.then(res => res.data)
	},
	updateStatus(status: string) {
		return instance.put<TUpdateStatus>(`profile/status`, { status: status })
			.then(res => res.data)
	},
	changePhoto(photo: File) {
		let formData = new FormData();
		formData.append('image', photo)
		return instance.put<TChangePhoto>(`profile/photo`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
			.then(res => res.data)
	}
}
