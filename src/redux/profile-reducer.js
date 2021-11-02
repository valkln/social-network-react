import { stopSubmit } from "redux-form";
import { profileAPI } from "../API/api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';
let initialState = {
	profile: null,
	posts: [
		{ id: 1, message: "Post 1", likesCount: 12 },
		{ id: 2, message: "Post 2", likesCount: 0 },
		{ id: 3, message: "Post 3", likesCount: 4 }
	],
	status: ''
}
const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				posts: [...state.posts, { id: 4, likesCount: 0, message: action.data.body }]
			}
		case SET_PROFILE:
			return {
				...state, profile: action.profile
			}
		case SET_STATUS:
			return {
				...state, status: action.status
			}
		case 'SET_PHOTOS': {
			return { ...state, profile: { ...state.profile, photos: action.photos } }
		}
		default: return state
	}
}

export const addPostAC = (data) => ({ type: ADD_POST, data })
const setProfile = (profile) => ({ type: SET_PROFILE, profile })
const setStatus = (status) => ({ type: SET_STATUS, status })
const setPhotos = (photos) => ({ type: 'SET_PHOTOS', photos })

export const getProfile = (id) => async (dispatch) => {
	let response = await profileAPI.getProfile(id);
	dispatch(setProfile(response))
}
export const getStatus = (id) => async (dispatch) => {
	let response = await profileAPI.getStatus(id);
	dispatch(setStatus(response))
}

export const updateStatus = (status) => async (dispatch) => {
	let response = await profileAPI.updateStatus(status);
	if (response.resultCode === 0) {
		dispatch(setStatus(status))
	}
}

export const changePhoto = (photo) => async (dispatch) => {
	let response = await profileAPI.changePhoto(photo);
	if (response.resultCode === 0) {
		dispatch(setPhotos(response.data.photos))
	}
}
export const updateProfile = (data) => async (dispatch, getState) => {
	let id = getState().auth.userId
	let response = await profileAPI.updateProfile(data);
	if (response.resultCode === 0) {
		dispatch(getProfile(id))
	} else {
		dispatch(stopSubmit('edit-profile', { _error: response.messages[0] }))
		return Promise.reject(response.messages[0])
	}
}
export default profileReducer;