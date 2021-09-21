import s from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Preloader from '../common/Preloader/Preloader';
export default function Profile(props) {
	if (!props.profile) {
		return <Preloader />
	}
	else return (
		<div className={s.profile}>
			<ProfileInfo profile={props.profile} />
			<MyPostsContainer />
		</div>
	);
}