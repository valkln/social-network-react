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
import { useHistory } from 'react-router';

const Users: React.FC = () => {
	const isFetching = useSelector(getIsFetching)
	const users = useSelector(getUsersInfo)
	const pageSize = useSelector(getPageSize);
	const filter = useSelector(getFilter)
	const currentPage = useSelector(getCurrentPage)
	const followingInProgress = useSelector(getFollowingProgress)
	const history = useHistory();
	const dispatch = useDispatch()
	useEffect(() => {
		const params = new URLSearchParams(window.location.search.substring(1));
		const Urlname = params.get('term')
		const Urlpage = params.get('page')
		const Urlfriend = params.get('friend')
		let ActualPage = currentPage
		let ActualFilter = filter
		if (Urlpage) ActualPage = +Urlpage
		if (Urlname) ActualFilter.name = Urlname
		if (Urlfriend === 'null') ActualFilter.friend = null
		if (Urlfriend === 'true') ActualFilter.friend = true
		dispatch(getUsers(ActualPage, pageSize, ActualFilter))
	}, [])
	useEffect(() => {
		history.push({
			pathname: '/users',
			search: `?term=${filter.name}&friend=${filter.friend}&page=${currentPage}`
		})
	}, [filter, currentPage])
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