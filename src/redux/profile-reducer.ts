import { InferActionTypes, BaseThunkType } from './redux-store';
import { PhotosType, PostType, ProfileType } from './../types/types';
import { profileAPI } from "../API/profile-api";
import { resultCode } from '../API/api';

let initialState = {
	profile: null as ProfileType | null,
	posts: [
		{ id: 1, message: "Post 1", likesCount: 12 },
		{ id: 2, message: "Post 2", likesCount: 0 },
		{ id: 3, message: "Post 3", likesCount: 4 }
	] as Array<PostType>,
	status: '' as string | null
}
export type InitialStateType = typeof initialState;
const profileReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case 'ADD_POST':
			return {
				...state,
				posts: [...state.posts, { id: 4, likesCount: 0, message: action.message }]
			}
		case 'SET_PROFILE':
			return {
				...state, profile: action.profile
			}
		case 'SET_STATUS':
			return {
				...state, status: action.status
			}
		case 'SET_PHOTOS': {
			return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType }
		}
		default: return state
	}
}
//actions
export const actions = {
	addPostAC: (message: string) => ({ type: 'ADD_POST', message } as const),
	setProfile: (profile: ProfileType) => ({ type: 'SET_PROFILE', profile } as const),
	setStatus: (status: string) => ({ type: 'SET_STATUS', status } as const),
	setPhotos: (photos: PhotosType) => ({ type: 'SET_PHOTOS', photos } as const)
}
type ActionTypes = InferActionTypes<typeof actions>
//thunks
type ThunkType = BaseThunkType<ActionTypes>
export const getProfile = (id: number): ThunkType => async (dispatch) => {
	let res = await profileAPI.getProfile(id);
	dispatch(actions.setProfile(res))
}
export const getStatus = (id: number): ThunkType => async (dispatch) => {
	let res = await profileAPI.getStatus(id);
	dispatch(actions.setStatus(res))
}
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
	let res = await profileAPI.updateStatus(status);
	if (res.resultCode === resultCode.Success) {
		dispatch(actions.setStatus(status))
	}
}
export const changePhoto = (photo: File): ThunkType => async (dispatch) => {
	let res = await profileAPI.changePhoto(photo);
	if (res.resultCode === resultCode.Success) {
		debugger
		dispatch(actions.setPhotos(res.data.photos))
	}
}
export const updateProfile = (profile: ProfileType): ThunkType => async (dispatch) => {
	let id = profile.userId;
	let res = await profileAPI.updateProfile(profile);
	if (res.resultCode === resultCode.Success) {
		dispatch(getProfile(id))
	}
}
export default profileReducer;