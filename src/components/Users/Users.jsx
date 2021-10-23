import s from './Users.module.css'
import React from 'react';
import Paginator from './Paginator';
import User from './User';
const Users = (props) => {
	return <div className={s.users} >
		<Paginator onPageChanged={props.onPageChanged} currentPage={props.currentPage} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} />
		<h3 className={s.users_title}>Find Users</h3>
		<div>
			{props.users.map(u => <User
				key={u.id}
				user={u}
				followingInProgress={props.followingInProgress}
				followPost={props.followPost}
				followDelete={props.followDelete}
			/>
			)}
		</div>
	</div >
}

export default Users;