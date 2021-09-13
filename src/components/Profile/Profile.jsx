import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
export default function Profile(props) {
	return (
		<div className={s.profile}>
			<ProfileInfo />
			<MyPosts
				p={props.state.posts}
				addPost={props.addPost}
				newPostText={props.state.newPostText}
				updateNewPostText={props.updateNewPostText}
			/>
		</div>
	);
}