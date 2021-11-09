import { AppStateType } from "./redux-store";
export const getUsersInfo = (state: AppStateType) => {
	return state.users.users;
}
export const getPageSize = (state: AppStateType) => {
	return state.users.pageSize;
}
export const getTotalUsersCount = (state: AppStateType) => {
	return state.users.totalUsersCount
}
export const getCurrentPage = (state: AppStateType) => {
	return state.users.currentPage
}
export const getIsFetching = (state: AppStateType) => {
	return state.users.isFetching
}
export const getFollowingProgress = (state: AppStateType) => {
	return state.users.followingInProgress
}
export const getFilter = (state: AppStateType) => {
	return state.users.filter;
}