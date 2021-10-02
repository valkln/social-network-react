import React from "react";
import User from './User';
import { connect } from 'react-redux';
import { followDelete, followPost } from "../../../API/api";

class UserContainer extends React.Component {
	unfollow = (id) => {
		followDelete(id).then(response => {
			this.followed = false
			this.props.toggleFollow(this.id, this.followed)
		})
	}
	follow = (id) => {
		followPost(id).then(response => {
			this.followed = true
			this.props.toggleFollow(this.id, this.followed)
		});
	}
	render() {
		return <User
			userpic={this.props.userpic}
			followed={this.props.followed}
			name={this.props.name}
			id={this.props.id}
			key={this.props.id}
			follow={this.follow}
			unfollow={this.unfollow} />
	}
}



export default connect()(UserContainer)