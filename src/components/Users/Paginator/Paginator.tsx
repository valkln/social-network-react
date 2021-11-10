import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPage, getFilter, getPageSize, getTotalUsersCount } from '../../../redux/users-selectors';
import { getUsers } from '../../../redux/users-reducer';
import { Pagination } from '@mui/material';

const Paginator: React.FC = () => {
	const totalUsersCount = useSelector(getTotalUsersCount);
	const pageSize = useSelector(getPageSize);
	const filter = useSelector(getFilter)
	const currentPage = useSelector(getCurrentPage)
	const dispatch = useDispatch()
	const onPageChanged = (pageNumber: number) => {
		dispatch(getUsers(pageNumber, pageSize, filter));
	}
	let pagesCount = Math.ceil(totalUsersCount / pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	return <Pagination
		count={pagesCount}
		page={currentPage}
		onChange={(e, p) => onPageChanged(p)}
	/>
}

export default Paginator;