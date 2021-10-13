import { connect } from 'react-redux';
import {
	setCurrentPage, toggleIsFetching,
	getUsers, followDelete, followPost
} from '../../redux/users-reducer';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import AuthRedirect from '../../hoc/AuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}
	onPageChanged = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize);
	}
	render() {
		return <>
			{this.props.isFetching ? <Preloader /> : null
			}
			<Users
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				users={this.props.users}
				toggleFollow={this.props.toggleFollow}
				followingInProgress={this.props.followingInProgress}
				followPost={this.props.followPost}
				followDelete={this.props.followDelete}
			/>
		</>
	}
}

let msp = (state) => {
	return {
		users: state.users.users,
		pageSize: state.users.pageSize,
		totalUsersCount: state.users.totalUsersCount,
		currentPage: state.users.currentPage,
		isFetching: state.users.isFetching,
		followingInProgress: state.users.followingInProgress
	}
};

export default compose(
	connect(msp, {
		setCurrentPage,
		toggleIsFetching,
		getUsers,
		followPost,
		followDelete
	}),
	AuthRedirect
)(UsersContainer)