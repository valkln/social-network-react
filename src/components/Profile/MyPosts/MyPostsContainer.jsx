import MyPosts from './MyPosts'
import { updatePostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer.js'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
	return {
		p: state.profile.posts,
		newPostText: state.profile.newPostText
	}
};
let mapDispatchToProps = (dispatch) => {
	return {
		updatePostText: (text) => {
			let action = updatePostTextActionCreator(text)
			dispatch(action)
		},
		addPost: () => { dispatch(addPostActionCreator()) }
	}
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;