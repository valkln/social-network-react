import React from 'react';
import s from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Preloader from '../common/Preloader/Preloader';
const Profile = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	else return (
		<div className={s.profile}>
			<ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
			<MyPostsContainer profile={props.profile} />
		</div>
	);
}
export default Profile;