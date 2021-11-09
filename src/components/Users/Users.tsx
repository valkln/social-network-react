import s from './Users.module.css'
import React, { useEffect } from 'react';
import Paginator from './Paginator/Paginator';
import User from './User';
import SearchForm from './SearchForm/SearchForm';
import { useDispatch, useSelector } from 'react-redux';
import { followDelete, followPost, getUsers } from '../../redux/users-reducer';
import { getCurrentPage, getFilter, getFollowingProgress, getIsFetching, getPageSize, getUsersInfo } from '../../redux/users-selectors';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import AuthRedirect from '../../hoc/AuthRedirect';

const Users: React.FC = () => {
	const isFetching = useSelector(getIsFetching)
	const users = useSelector(getUsersInfo)
	const pageSize = useSelector(getPageSize);
	const filter = useSelector(getFilter)
	const currentPage = useSelector(getCurrentPage)
	const followingInProgress = useSelector(getFollowingProgress)

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getUsers(currentPage, pageSize, filter))
	}, [])
	const unfollow = (id: number, followed: boolean) => {
		dispatch(followDelete(id, followed))
	}
	const follow = (id: number, followed: boolean) => {
		dispatch(followPost(id, followed))
	}
	return <>
		{isFetching ? <Preloader /> : null
		}
		<div className={s.users} >
			<h3 className={s.users_title}>Find Users</h3>
			<SearchForm />
			<Paginator />
			<div className={s.list}>
				{users.map(u => <User
					key={u.id}
					user={u}
					follow={follow}
					unfollow={unfollow}
					followingInProgress={followingInProgress}
				/>
				)}
			</div>
		</div >
	</>
}
export default compose(AuthRedirect)(Users);