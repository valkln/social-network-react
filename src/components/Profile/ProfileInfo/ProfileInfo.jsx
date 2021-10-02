import s from './ProfileInfo.module.css'
import defUserPic from '../../../img/ava.png'
export default function ProfileInfo(props) {
	return (
		<div className={s.profile}>
			<div className={s.user}>
				<div className={s.userpic}><img src={props.profile.photos.large !== null ? props.profile.photos.large : defUserPic} alt='userpic'></img></div>
				<div className={s.userinfo}>
					<div className={s.fullName}>{props.profile.fullName}</div>
					<div>{props.profile.aboutMe}</div>
					<div className={s.contacts}></div>
				</div>
			</div>
		</div>
	);
}