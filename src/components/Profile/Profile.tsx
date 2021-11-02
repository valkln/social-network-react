import React from 'react';
import s from './Profile.module.css'
import { ProfileType } from '../../types/types'
import MyPostsContainer from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Preloader from '../common/Preloader/Preloader';
type Tprops = {
	profile: ProfileType,
	status: string,
	isOwner: boolean,
	updateStatus: (status: string) => void,
	changePhoto: (photo: any) => void,
	updateProfle: (profile: ProfileType) => void
}
const Profile: React.FC<Tprops> = ({ profile, status, updateStatus, isOwner, changePhoto, updateProfle }) => {
	if (!profile) {
		return <Preloader />
	}
	else return (
		<div className={s.profile}>
			<ProfileInfo isOwner={isOwner} updateProfle={updateProfle} changePhoto={changePhoto} profile={profile} status={status} updateStatus={updateStatus} />
			<MyPostsContainer profile={profile} />
		</div>
	);
};
export default Profile;