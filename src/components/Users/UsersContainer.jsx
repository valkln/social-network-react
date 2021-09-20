import { connect } from 'react-redux';
import { setUsers, toggleFollow, setCurrentPage, setUsersTotalCount, toggleIsFetching } from '../../redux/users-reducer';
import axios from 'axios';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items)
				this.props.setUsersTotalCount(response.data.totalCount)
				this.props.toggleIsFetching(false);
			});
	}
	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items)
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
