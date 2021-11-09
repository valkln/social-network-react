import { AppStateType } from './redux-store';
export const getProfileData = (state: AppStateType) => {
	return state.profile.profile
}
export const getPosts = (state: AppStateType) => {
	return state.profile.posts
}
export const getStatusData = (state: AppStateType) => {
	return state.profile.status
}