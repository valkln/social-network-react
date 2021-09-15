import s from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
export default function Profile(props) {
	return (
		<div className={s.profile}>
			<ProfileInfo />
			<MyPostsContainer />
		</div>
	);
}