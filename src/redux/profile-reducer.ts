import { AppStateType } from './redux-store';
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
type ActionTypes = addPostACType | setProfileType | setStatusType | setPhotosType;
type addPostACType = { type: typeof ADD_POST, payload: string }
type setProfileType = { type: typeof SET_PROFILE, profile: ProfileType }
type setStatusType = { type: typeof SET_STATUS, status: string }
type setPhotosType = { type: typeof SET_PHOTOS, photos: PhotosType }
//AC
export const addPostAC = (payload: string): addPostACType => ({ type: ADD_POST, payload })
const setProfile = (profile: ProfileType): setProfileType => ({ type: SET_PROFILE, profile })
const setStatus = (status: string): setStatusType => ({ type: SET_STATUS, status })
const setPhotos = (photos: PhotosType): setPhotosType => ({ type: SET_PHOTOS, photos })
//thunks
type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionTypes>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;
export const getProfile = (id: number): ThunkType => async (dispatch) => {
	let response = await profileAPI.getProfile(id);
	dispatch(setProfile(response))
}
export const getStatus = (id: number): ThunkType => async (dispatch) => {
	let response = await profileAPI.getStatus(id);
	dispatch(setStatus(response))
}
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
	let response = await profileAPI.updateStatus(status);
	if (response.resultCode === 0) {
		dispatch(setStatus(status))
	}
}
export const changePhoto = (photo: any): ThunkType => async (dispatch) => {
	let response = await profileAPI.changePhoto(photo);
	if (response.resultCode === 0) {
		dispatch(setPhotos(response.data.photos))
	}
}
export const updateProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
	let id = getState().auth.userId
	let response = await profileAPI.updateProfile(profile);
	if (response.resultCode === 0) {
		dispatch(getProfile(id))
	}
}
export default profileReducer;