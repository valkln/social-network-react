import { UserType } from "../types/types";
import { instance, resultCode } from "./api";

type TGetUsers = {
	items: UserType[],
	totalCount: number,
	error: string | null
}
type TFollowDelete = {
	data: {},
	resultCode: resultCode,
	messages: string[]
}
type TFollowPost = {
	data: {},
	resultCode: resultCode,
	messages: string[]
}
export const usersAPI = {
	getUsers(currentPage: number, pageSize: number, name: string = '', friend: null | boolean = null) {
		return instance.get<TGetUsers>(`users?page=${currentPage}&count=${pageSize}&term=${name}` + (friend === null ? '' : `&friend=${friend}`))
			.then(res => res.data)
	},
	followDelete(id: number) {
		return instance.delete<TFollowDelete>('follow/' + id)
			.then(res => res.data)
	},
	followPost(id: number) {
		return instance.post<TFollowPost>('follow/' + id)
			.then(res => res.data)
	}
}