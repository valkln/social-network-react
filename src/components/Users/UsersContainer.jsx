import { connect } from 'react-redux';
import { setUsersAC, toggleFollowAC, setCurrentPageAC, setUsersTotalCountAC } from '../../redux/users-reducer';
import axios from 'axios';
import React from 'react';
import Users from './Users';

class UsersContainer extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items)
				this.props.setTotalCount(response.data.totalCount)
			});
	}
	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items)
			});
	}
	render() {
		return <Users
			totalUsersCount={this.props.totalUsersCount}
			pageSize={this.props.pageSize}
			currentPage={this.props.currentPage}
			onPageChanged={this.onPageChanged}
			users={this.props.users}
			follow={this.props.follow}
		/>
	}
}


let mapStateToProps = (state) => {
	return {
		users: state.users.users,
		pageSize: state.users.pageSize,
		totalUsersCount: state.users.totalUsersCount,
		currentPage: state.users.currentPage
	}
};
let mapDispatchToProps = (dispatch) => {
	return {
		follow: (id, followed) => {
			dispatch(toggleFollowAC(id, followed))
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		},
		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentPageAC(pageNumber))
		},
		setTotalCount: (totalCount) => {
			dispatch(setUsersTotalCountAC(totalCount))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
