import React from 'react';
import AddPost from './AddPost';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
	let postsElements = props.posts.map(p => <Post userpic={props.profile.photos.small} message={p.message} likesCount={p.likesCount} key={p.id} />)
	return (
		<div className={s.MyPosts}>
			<h3>posts</h3>
			<p className={s.new}>What's new?</p>
			<AddPost addPost={props.addPost} />
			<div className={s.posts}>{postsElements}</div>
		</ div>
	);
}
export default MyPosts;