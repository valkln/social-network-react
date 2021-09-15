import React from 'react';
import MyPosts from './MyPosts'
import { updatePostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer.js'
import StoreContext from '../../../StoreContext';

export default function MyPostsContainer() {
	return (
		<StoreContext.Consumer>
			{
				(store) => {
					let state = store.getState();
					let addNewPost = () => {
						store.dispatch(addPostActionCreator());
					}
					let onTextChange = (text) => {
						let action = updatePostTextActionCreator(text)
						store.dispatch(action);
					}
					return <MyPosts
						p={state.profile.posts}
						newPostText={state.profile.newPostText}
						updatePostText={onTextChange}
						addPost={addNewPost}
					/>
				}}</StoreContext.Consumer>
	)
}