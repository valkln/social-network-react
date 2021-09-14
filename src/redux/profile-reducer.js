const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
let initialState = {
	posts: [
		{ id: 1, message: "Buy some chocolate, mate.", likesCount: 12 },
		{ id: 2, message: "I'm the original Hetman!", likesCount: 0 },
		{ id: 3, message: "Hi! It's my first post!", likesCount: 4 }
	],
	newPostText: ''
}
const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 4,
				likesCount: 0,
				message: state.newPostText
			}
			state.posts.push(newPost);
			state.newPostText = '';
			return state;
		case UPDATE_POST_TEXT:
			state.newPostText = action.newText;
			return state;
		default: return state
	}
}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updatePostTextActionCreator = (text) =>
	({ type: UPDATE_POST_TEXT, newText: text })
export default profileReducer;