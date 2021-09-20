import s from './Users.module.css'
import User from './User/User'
import React from 'react';

let Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	return <div className={s.users} >
		<div>
			{pages.map(p => {
				return <span onClick={() => props.onPageChanged(p)} className={props.currentPage == p && s.selected}>{p}</span>
			})}
		</div>
		<h3 className={s.users_title}>Find Users</h3>
		<div>
			{props.users.map(u => <User toggleFollow={props.toggleFollow} userpic={u.photos.small} followed={u.followed} name={u.name} id={u.id} key={u.id} />)}
		</div>
	</div >
}

export default Users;