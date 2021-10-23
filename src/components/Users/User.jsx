import s from './Users.module.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import defUserPic from '../../img/ava.png';
const User = ({ user, ...props }) => {
	return <div key={user.id} className={s.user}>
		<div className={s.name}>{user.name}</div>
		<NavLink to={'/profile/' + user.id}> <div className={s.userpic}> <img src={user.photos.small !== null ? user.photos.small : defUserPic} alt='userpic' /> </div> </NavLink>
		{props.followed ?
			<button
				disabled={props.followingInProgress.some(id => id === user.id)}
				className={s.button}
				onClick={() => { props.followDelete(props.id, props.followed) }}>Unfollow</button>
			:
			<button
				disabled={props.followingInProgress.some(id => id === user.id)}
				className={s.button}
				onClick={() => { props.followPost(props.id, props.followed) }}>Follow</button>
		}
	</div>
}
export default User;