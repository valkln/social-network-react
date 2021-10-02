import { connect } from 'react-redux';
import { setUsers, toggleFollow, setCurrentPage, setUsersTotalCount, toggleIsFetching } from '../../redux/users-reducer';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { getUsers } from '../../API/api.js';

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching(true);
		getUsers(this.props.currentPage, this.props.pageSize).then(data => {
			this.props.setUsers(data.items)
			this.props.setUsersTotalCount(data.totalCount)
			this.props.toggleIsFetching(false);
		});
	}
	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true);
		getUsers(pageNumber, this.props.pageSize).then(data => {
			this.props.setUsers(data.items)
			this.props.toggleIsFetching(false);
		});
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
			/>
		</>
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.users.users,
		pageSize: state.users.pageSize,
		totalUsersCount: state.users.totalUsersCount,
		currentPage: state.users.currentPage,
		isFetching: state.users.isFetching
	}
};

export default connect(mapStateToProps, {
	toggleFollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching
})(UsersContainer)
