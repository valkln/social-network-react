import MyPosts from './MyPosts'
import { addPostAC } from '../../../redux/profile-reducer.js'
import { connect } from 'react-redux';

let msp = (state) => {
	return {
		posts: state.profile.posts
	}
};
let mdp = (dispatch) => {
	return {
		addPost: (data) => { dispatch(addPostAC(data)) }
	}
};
const MyPostsContainer = connect(msp, mdp)(MyPosts)

export default MyPostsContainer;