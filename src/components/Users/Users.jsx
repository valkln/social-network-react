import s from './Users.module.css'
import User from './User/User'
import axios from 'axios';
import React from 'react';

class Users extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items)
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
		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
		let pages = []
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i);
		}
		return (
			<div className={s.users}>
				<div>
					{pages.map(p => {
						return <span onClick={() => this.onPageChanged(p)} className={this.props.currentPage == p && s.selected}>{p}</span>
					})}
				</div>
				<h3 className={s.users_title}>Find Users</h3>
				<div>
					{this.props.users.map(u => <User follow={this.props.follow} userpic={u.photos.small} followed={u.followed} name={u.name} id={u.id} key={u.id} />)}
				</div>
			</div>
		);
	}
}
export default Users;