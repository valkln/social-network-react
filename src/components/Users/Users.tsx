import s from './Users.module.css'
import React from 'react';
import Paginator from './Paginator/Paginator';
import User from './User';
import { UserType } from '../../types/types'
type PropsType = {
	portionSize?: number
	totalUsersCount: number
	pageSize: number
	currentPage: number
	users: UserType[]
	followingInProgress: number[]
	onPageChanged: (pageNumber: number) => void
	followPost: (id: number, followed: boolean) => void
	followDelete: (id: number, followed: boolean) => void
}


const Users: React.FC<PropsType> = (props) => {
	return <div className={s.users} >
		<Paginator onPageChanged={props.onPageChanged} currentPage={props.currentPage} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} />
		<h3 className={s.users_title}>Find Users</h3>
		<div className={s.list}>
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