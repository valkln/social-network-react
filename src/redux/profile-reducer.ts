import { PhotosType, ContactsType, PostType } from './../types/types';
import { stopSubmit } from "redux-form";
import { profileAPI } from "../API/api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';
const SET_PHOTOS = 'SET_PHOTOS';
type ProfileType = {
	userId: number
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	contacts: ContactsType,
	photos: PhotosType
}

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
				posts: [...state.posts, { id: 4, likesCount: 0, message: action.payload.body }]
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
type addPostACType = {
	type: typeof ADD_POST,
	payload: string
}
export const addPostAC = (payload: string): addPostACType => ({ type: ADD_POST, payload })
type setProfileType = {
	type: typeof SET_PROFILE,
	profile: ProfileType
}
const setProfile = (profile: ProfileType): setProfileType => ({ type: SET_PROFILE, profile })
type setStatusType = {
	type: typeof SET_STATUS,
	status: string
}
const setStatus = (status: string): setStatusType => ({ type: SET_STATUS, status })
type setPhotosType = {
	type: typeof SET_PHOTOS,
	photos: PhotosType
}
const setPhotos = (photos: PhotosType): setPhotosType => ({ type: SET_PHOTOS, photos })

export const getProfile = (id: number) => async (dispatch: any) => {
	let response = await profileAPI.getProfile(id);
	dispatch(setProfile(response))
}
export const getStatus = (id: number) => async (dispatch: any) => {
	let response = await profileAPI.getStatus(id);
	dispatch(setStatus(response))
}

export const updateStatus = (status: string) => async (dispatch: any) => {
	let response = await profileAPI.updateStatus(status);
	if (response.resultCode === 0) {
		dispatch(setStatus(status))
	}
}

export const changePhoto = (photo: any) => async (dispatch: any) => {
	let response = await profileAPI.changePhoto(photo);
	if (response.resultCode === 0) {
		dispatch(setPhotos(response.data.photos))
	}
}
export const updateProfle = (profile: ProfileType) => async (dispatch: any, getState: any) => {
	let id = getState().auth.userId
	let response = await profileAPI.updateProfle(profile);
	if (response.resultCode === 0) {
		dispatch(getProfile(id))
	} else {
		dispatch(stopSubmit('edit-profile', { _error: response.messages[0] }))
		return Promise.reject(response.messages[0])
	}
}
export default profileReducer;