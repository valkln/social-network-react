import s from './MyPosts.module.css'
import Post from './Post/Post';
export default function MyPosts() {
	return (
		<div className={s.MyPosts}>
			<h3>posts</h3>
			<p>What's new?</p>
			<textarea></textarea>
			<button>Add new post</button>
			<Post />
			<Post />
			<Post />
		</ div>
	);
}