import s from './Profile.module.css'
import ava from '../../img/peter.jpg';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
export default function Profile(props) {
	return (
		<div className={s.profile}>
			<ProfileInfo />
			<MyPosts p={props.p} />
		</div>
	);
}