import s from './MyPosts.module.css'
import Post from './Post/Post';
export default function MyPosts(props) {
	let postsElements = props.p.map(p => <Post message={p.message} likesCount={p.likesCount} />)
	return (
		<div className={s.MyPosts}>
			<h3>posts</h3>
			<p>What's new?</p>
			<textarea></textarea>
			<br />
			<button>Add new post</button>
			<div className={s.posts}>{postsElements}</div>
		</ div>
	);
}