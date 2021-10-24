import React from 'react';
import s from './ProfileInfo.module.css'
import defUserPic from '../../../img/ava.png'
import ProfileStatus from './ProfileStatus';
const ProfileInfo = (props) => {

	debugger
	const onPhotoSelect = (e) => {
		if (e.target.files.length) {
			props.changePhoto(e.target.files[0])
		}
	}
	return (
		<div className={s.profile}>
			<div className={s.user}>
				<div className={s.userpic}><img src={props.profile.photos.large ? props.profile.photos.large : defUserPic} alt='userpic'></img>
					{props.isOwner ? <> <input onChange={onPhotoSelect} id="input__file" type={"file"} /> <label for="input__file">Change userpic</label> </> : null}
				</div>
				<div className={s.userinfo}>
					<div className={s.fullName}>{props.profile.fullName}</div>
					<ProfileStatus status={props.status} updateStatus={props.updateStatus} />
					<div>Looking for a job: {props.profile.lookingForAJob ? 'yes' : 'no'}</div>
					{props.profile.lookingForAJob ?
						<div>My skills: {props.profile.lookingForAJobDescription} </div>
						: undefined}
					<div className={s.contacts}>Contacts:
						{Object.keys(props.profile.contacts).map(key => {
							return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
const Contact = ({ contactTitle, contactValue }) => {
	return <div className={s.contact}>{contactTitle}: {contactValue}</div>
}
export default ProfileInfo;