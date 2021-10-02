const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE;'
let initialState = {
	profile: null,
	posts: [
		{ id: 1, message: "Post 1", likesCount: 12 },
		{ id: 2, message: "Post 2", likesCount: 0 },
		{ id: 3, message: "Post 3", likesCount: 4 }
	],
	newPostText: ''
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
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			}
		default: return state
	}
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updatePostTextActionCreator = (text) =>
	({ type: UPDATE_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export default profileReducer;