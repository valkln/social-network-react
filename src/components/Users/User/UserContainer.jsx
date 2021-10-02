import React from "react";
import User from './User';
import { connect } from 'react-redux';

class UserContainer extends React.Component {
	render() {
		debugger
		return <User
			toggleFollow={this.props.toggleFollow}
			userpic={this.props.userpic}
			followed={this.props.followed}
			name={this.props.name}
			id={this.props.id}
			key={this.props.id} />
	}
}


export default connect()(UserContainer)