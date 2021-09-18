import { connect } from 'react-redux';
import { setUsersAC, toggleFollowAC } from '../../redux/users-reducer';
import Users from './Users';
let mapStateToProps = (state) => {
	return {
		users: state.users.users
	}
};
let mapDispatchToProps = (dispatch) => {
	return {
		follow: (id, followed) => {
			dispatch(toggleFollowAC(id, followed))
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		}
	}
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;