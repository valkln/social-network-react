import MyPosts from './MyPosts'
import { updatePostTextAC, addPostAC } from '../../../redux/profile-reducer.js'
import { connect } from 'react-redux';

let msp = (state) => {
	return {
		p: state.profile.posts,
		newPostText: state.profile.newPostText
	}
};
let mdp = (dispatch) => {
	return {
		updatePostText: (text) => {
			let action = updatePostTextAC(text)
			dispatch(action)
		},
		addPost: () => { dispatch(addPostAC()) }
	}
};
const MyPostsContainer = connect(msp, mdp)(MyPosts)

export default MyPostsContainer;