import { profileAPI } from "../API/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS'
let initialState = {
	profile: null,
	posts: [
		{ id: 1, message: "Post 1", likesCount: 12 },
		{ id: 2, message: "Post 2", likesCount: 0 },
		{ id: 3, message: "Post 3", likesCount: 4 }
	],
	newPostText: '',
	status: ''
}
const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				posts: [...state.posts, { id: 4, likesCount: 0, message: state.newPostText }],
				newPostText: ''
			}
		case UPDATE_POST_TEXT:
			return {
				...state,
				newPostText: action.newText
			}
		case SET_PROFILE:
			return {
				...state,
				profile: action.profile
			}
		case SET_STATUS:
			return {
				...state,
				status: action.status
			}
		default: return state
	}
}

export const addPostAC = () => ({ type: ADD_POST })
export const updatePostTextAC = (text) =>
	({ type: UPDATE_POST_TEXT, newText: text })
export const setProfile = (profile) => ({ type: SET_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getProfile = (id) => (dispatch) => {
	profileAPI.getProfile(id)
		.then(response => {
			dispatch(setProfile(response))
		});
}
export const getStatus = (id) => (dispatch) => {
	profileAPI.getStatus(id)
		.then(response => {
			dispatch(setStatus(response))
		});
}

export const updateStatus = (status) => (dispatch) => {
	profileAPI.updateStatus(status)
		.then(response => {
			dispatch(setStatus(status))
		});
}
export default profileReducer;