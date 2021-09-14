import React from 'react';
import MyPosts from './MyPosts'
import { updatePostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer.js'

export default function MyPostsContainer(props) {
	let state = props.store.getState();
	let addNewPost = () => {
		props.store.dispatch(addPostActionCreator());
	}
	let onTextChange = (text) => {
		let action = updatePostTextActionCreator(text)
		props.store.dispatch(action);
	}
	return (<MyPosts
		p={state.profile.posts}
		newPostText={state.profile.newPostText}
		updatePostText={onTextChange}
		addPost={addNewPost}
	/>);
}