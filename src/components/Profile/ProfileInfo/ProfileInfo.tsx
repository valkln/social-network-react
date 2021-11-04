import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import EditProfile from './EditProfile/EditProfile';
import { ContactsType, ProfileType } from '../../../types/types';
import Userpic from './Userpic';
type TProfileInfoProps = {
	profile: ProfileType
	status: string
	isOwner: boolean
	changePhoto: (photo: File) => void
	updateStatus: (status: string) => void
	updateProfile: (profile: ProfileType) => void
}
const ProfileInfo: React.FC<TProfileInfoProps> = ({ profile, status, isOwner, ...props }) => {
	let [editMode, setEditMode] = useState(false)
	return (
		<div className={s.profileInfo}>
			<Userpic userpic={profile.photos.large} isOwner={isOwner} changePhoto={props.changePhoto} />
			<div className={s.userinfo}>
				<ProfileStatus status={status} updateStatus={props.updateStatus} />
				{editMode ?
					<EditProfile setEditMode={setEditMode} updateProfile={props.updateProfile} profile={profile} />
					: <UserData goToEditMode={() => { setEditMode(true) }} isOwner={isOwner} profile={profile} />}
			</div>
		</div >
	);
}
type TUserDataProps = {
	profile: ProfileType
	isOwner: boolean
	goToEditMode: () => void
}
const UserData: React.FC<TUserDataProps> = ({ profile, isOwner, goToEditMode }) => {
	return <div className={s.userdata}>
		<div className={s.fullName}>{profile.fullName}</div>
		{profile.aboutMe ? <div>{profile.aboutMe}</div> : null}
		<div>Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}</div>
		{profile.lookingForAJob ?
			<div>My skills: {profile.lookingForAJobDescription} </div>
			: undefined}
		<div className={s.contacts}>Contacts:
			{Object.keys(profile.contacts).map(key => {
				return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]} />
			})}
		</div>
		{isOwner ? <button className={s.btn} onClick={goToEditMode}>Edit Profile</button> : undefined}
	</div>
}
type TContactProps = {
	contactTitle: string
	contactValue: string | null
}
const Contact: React.FC<TContactProps> = ({ contactTitle, contactValue }) => {
	if (!contactValue) return null
	else return <div className={s.contact}>{contactTitle}: {contactValue}</div>
}
export default ProfileInfo;