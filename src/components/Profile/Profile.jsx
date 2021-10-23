import React from 'react';
import s from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Preloader from '../common/Preloader/Preloader';
const Profile = ({ profile, status, updateStatus }) => {
	if (!profile) {
		return <Preloader />
	}
	else return (
		<div className={s.profile}>
			<ProfileInfo profile={profile} status={status} updateStatus={updateStatus} />
			<MyPostsContainer profile={profile} />
		</div>
	);
};
export default Profile;