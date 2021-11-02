import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import EditProfile from './EditProfile/EditProfile';
import Userpic from './Userpic';
const ProfileInfo = ({ profile, ...props }) => {
	let [editMode, setEditMode] = useState(false)
	return (
		<div className={s.profileInfo}>
			<Userpic userpic={profile.photos.large} isOwner={props.isOwner} changePhoto={props.changePhoto} />
			<div className={s.userinfo}>
				<ProfileStatus status={props.status} updateStatus={props.updateStatus} />
				{editMode ? <EditProfile setEditMode={setEditMode} updateProfile={props.updateProfile} profile={profile} /> : <UserData setEditMode={setEditMode} isOwner={props.isOwner} profile={profile} />}
			</div>
		</div >
	);
}
const UserData = ({ profile, isOwner, setEditMode }) => {
	return <div className={s.userdata}>
		<div className={s.fullName}>{profile.fullName}</div>
		<div>Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}</div>
		{profile.lookingForAJob ?
			<div>My skills: {profile.lookingForAJobDescription} </div>
			: undefined}
		{profile.aboutMe ? <div>{profile.aboutMe}</div> : null}
		<div className={s.contacts}>Contacts:
			{Object.keys(profile.contacts).map(key => {
				return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
			})}
		</div>
		{isOwner ? <button className={s.btn} onClick={setEditMode}>Edit Profile</button> : undefined}
	</div>
}

const Contact = ({ contactTitle, contactValue }) => {
	return <div className={s.contact}>{contactTitle}: {contactValue}</div>
}
export default ProfileInfo;