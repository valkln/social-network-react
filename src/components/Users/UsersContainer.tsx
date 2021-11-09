import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store'
import { getUsers, followDelete, followPost } from '../../redux/users-reducer';
import React from 'react';
import Users from './Users';
import { FilterType, UserType } from '../../types/types'
import Preloader from '../common/Preloader/Preloader';
import AuthRedirect from '../../hoc/AuthRedirect';
import { compose } from 'redux';
import { getCurrentPage, getFilter, getFollowingProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsersInfo } from '../../redux/users-selectors';
type mstpType = {
	currentPage: number
	pageSize: number
	totalUsersCount: number
	users: UserType[]
	followingInProgress: number[]
	isFetching: boolean
	filter: FilterType
}

type mdtpType = {
	getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void
	followPost: (id: number, followed: boolean) => void
	followDelete: (id: number, followed: boolean) => void
}
type PropsType = mstpType & mdtpType;
class UsersContainer extends React.Component<PropsType> {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize, this.props.filter);
	}
	onPageChanged = (pageNumber: number) => {
		this.props.getUsers(pageNumber, this.props.pageSize, this.props.filter);
	}
	onFilterChanged = (filter: FilterType) => {
		this.props.getUsers(1, this.props.pageSize, filter);
	}
	render() {
		return <>
			{this.props.isFetching ? <Preloader /> : null
			}
			<Users
				onFilterChanged={this.onFilterChanged}
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				users={this.props.users}
				followingInProgress={this.props.followingInProgress}
				followPost={this.props.followPost}
				followDelete={this.props.followDelete}
			/>
		</>
	}
}

let mstp = (state: AppStateType): mstpType => {
	return {
		users: getUsersInfo(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingProgress(state),
		filter: getFilter(state)
	}
};

export default compose(
	connect(mstp, {
		getUsers,
		followPost,
		followDelete
	}),
	AuthRedirect
)(UsersContainer) as React.ComponentType