import s from './User.module.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import defUserPic from '../../img/ava.png';
const User = ({ user, ...props }) => {
	return <div className={s.user}>
		<NavLink to={'/profile/' + user.id}> <div className={s.userpic}> <img src={user.photos.small !== null ? user.photos.small : defUserPic} alt='userpic' /> </div> </NavLink>
		<div className={s.userdata}>
			<div className={s.name}>{user.name}</div>
			<div className={s.status}>{user.status}</div>
			{user.followed ?
				<button
					disabled={props.followingInProgress.some(id => id === user.id)}
					className={s.follow}
					onClick={() => { props.followDelete(user.id, user.followed) }}>Unfollow</button>
				:
				<button
					disabled={props.followingInProgress.some(id => id === user.id)}
					className={s.follow}
					onClick={() => { props.followPost(user.id, user.followed) }}>Follow</button>
			}
		</div>
	</div>
}
export default User;