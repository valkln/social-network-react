import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

export default function MyPosts(props) {
	let newPostElement = React.createRef();
	let addNewPost = () => {
		props.addPost();
	}
	let onTextChange = (event) => {
		let text = event.target.value;
		props.updatePostText(text);
	}
	let postsElements = props.p.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />)
	return (
		<div className={s.MyPosts}>
			<h3>posts</h3>
			<p className={s.new}>What's new?</p>
			<textarea placeholder='Enter your text' className={s.post_text} ref={newPostElement} onChange={onTextChange} value={props.newPostText} />
			<br />
			<button className={s.send} onClick={addNewPost}>Add new post</button>
			<div className={s.posts}>{postsElements}</div>
		</ div>
	);
}