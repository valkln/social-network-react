import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import { updatePostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer.js'

export default function MyPosts(props) {
	let newPostElement = React.createRef();
	let addNewPost = () => {
		props.dispatch(addPostActionCreator());
	}
	let onTextChange = () => {
		let text = newPostElement.current.value;
		props.dispatch(updatePostTextActionCreator(text));
	}
	let postsElements = props.p.map(p => <Post message={p.message} likesCount={p.likesCount} />)
	return (
		<div className={s.MyPosts}>
			<h3>posts</h3>
			<p className={s.new}>What's new?</p>
			<textarea placeholder='Enter your text' className={s.post_text} ref={newPostElement} onChange={onTextChange} value={props.newPostText} />
			<br />
			<button onClick={addNewPost}>Add new post</button>
			<div className={s.posts}>{postsElements}</div>
		</ div>
	);
}