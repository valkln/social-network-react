import { AppStateType, InferActionTypes } from './redux-store';
import { PhotosType, ContactsType, PostType, ProfileType } from './../types/types';
import { profileAPI } from "../API/api";
import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';
const SET_PHOTOS = 'SET_PHOTOS';

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
		case ADD_POST:
			return {
				...state,
				posts: [...state.posts, { id: 4, likesCount: 0, message: action.payload }]
			}
		case SET_PROFILE:
			return {
				...state, profile: action.profile
			}
		case SET_STATUS:
			return {
				...state, status: action.status
			}
		case SET_PHOTOS: {
			return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType }
		}
		default: return state
	}
}
//AC Types
type ActionTypes = InferActionTypes<typeof actions>
//AC
export const actions = {
	addPostAC: (payload: string) => ({ type: ADD_POST, payload }),
	setProfile: (profile: ProfileType) => ({ type: SET_PROFILE, profile }),
	setStatus: (status: string) => ({ type: SET_STATUS, status }),
	setPhotos: (photos: PhotosType) => ({ type: SET_PHOTOS, photos })
}
//thunks
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;
export const getProfile = (id: number): ThunkType => async (dispatch) => {
	let response = await profileAPI.getProfile(id);
	dispatch(actions.setProfile(response))
}
export const getStatus = (id: number): ThunkType => async (dispatch) => {
	let response = await profileAPI.getStatus(id);
	dispatch(actions.setStatus(response))
}
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
	let response = await profileAPI.updateStatus(status);
	if (response.resultCode === 0) {
		dispatch(actions.setStatus(status))
	}
}
export const changePhoto = (photo: any): ThunkType => async (dispatch) => {
	let response = await profileAPI.changePhoto(photo);
	if (response.resultCode === 0) {
		dispatch(actions.setPhotos(response.data.photos))
	}
}
export const updateProfile = (profile: ProfileType): ThunkType => async (dispatch) => {
	let id = profile.userId;
	let response = await profileAPI.updateProfile(profile);
	if (response.resultCode === 0) {
		dispatch(getProfile(id))
	}
}
export default profileReducer;