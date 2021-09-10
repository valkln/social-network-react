import s from './MyPosts.module.css'
import Post from './Post/Post';
export default function MyPosts(props) {
	let MyPostsData = [
		{ id: 1, message: "Buy some chocolate, mate.", likesCount: 12 },
		{ id: 2, message: "I'm the original Hetman!", likesCount: 0 },
		{ id: 3, message: "Hi! It's my first post!", likesCount: 4 }
	]
	return (
		<div className={s.MyPosts}>
			<h3>posts</h3>
			<p>What's new?</p>
			<textarea></textarea>
			<br />
			<button>Add new post</button>
			<Post message={MyPostsData[0].message} likesCount={MyPostsData[0].likesCount} />
			<Post message={MyPostsData[1].message} likesCount={MyPostsData[1].likesCount} />
			<Post message={MyPostsData[2].message} likesCount={MyPostsData[2].likesCount} />
		</ div>
	);
}