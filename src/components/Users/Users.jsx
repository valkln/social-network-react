import s from './Users.module.css'
import User from './User/User'
import axios from 'axios';
import React from 'react';

class Users extends React.Component {
	constructor(props) {
		super(props);
		axios.get('https://social-network.samuraijs.com/api/1.0/users')
			.then(response => {
				this.props.setUsers(response.data.items)
			});
	}
	render() {
		return (
			<div className={s.users}>
				<h3 className={s.users_title}>Find Users</h3>
				<div>{this.props.users.map(u => <User follow={this.props.follow} userpic={u.photos.small} followed={u.followed} name={u.name} id={u.id} key={u.id} />)}</div>
			</div>
		);
	}
}
export default Users;