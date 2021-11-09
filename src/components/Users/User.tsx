import s from './User.module.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import defUserPic from '../../img/ava.png';
import { UserType } from '../../types/types';
type Tprops = {
	user: UserType,
	followingInProgress: Number[],
	follow: (id: number, followed: boolean) => void,
	unfollow: (id: number, followed: boolean) => void
}
const User: React.FC<Tprops> = ({ user, followingInProgress, follow, unfollow }) => {
	return <div className={s.user}>
		<NavLink to={'/profile/' + user.id}> <div className={s.userpic}> <img src={user.photos.small !== null ? user.photos.small : defUserPic} alt='userpic' /> </div> </NavLink>
		<div className={s.userdata}>
			<div className={s.name}>{user.name}</div>
			<div className={s.status}>{user.status}</div>
			{user.followed ?
				<button
					disabled={followingInProgress.some(id => id === user.id)}
					className={s.follow}
					onClick={() => unfollow(user.id, user.followed)}>Unfollow</button>
				:
				<button
					disabled={followingInProgress.some(id => id === user.id)}
					className={s.follow}
					onClick={() => follow(user.id, user.followed)}>Follow</button>
			}
		</div>
	</div>
}
export default User;