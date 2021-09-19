import { connect } from 'react-redux';
import { setUsersAC, toggleFollowAC, setCurrentPageAC } from '../../redux/users-reducer';
import Users from './Users';
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
		}
	}
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;