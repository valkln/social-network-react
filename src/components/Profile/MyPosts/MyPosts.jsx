import s from './MyPosts.module.css'
import Post from './Post/Post';
export default function MyPosts() {
	return (
		<div className={s.MyPosts}>
			<h3>posts</h3>
			<p>What's new?</p>
			<textarea></textarea>
			<br />
			<button>Add new post</button>
			<Post message="Buy some chocolate, mate." />
			<Post message="I'm the original Hetman!" />
			<Post message="Hi! It's my first post!" />
		</ div>
	);
}