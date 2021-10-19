import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
import { withRouter } from "react-router";
import { compose } from "redux";
import AuthRedirect from "../../hoc/AuthRedirect";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.user;
			if (!userId) {
				this.props.history.push('/login');
			}
		};
		this.props.getProfile(userId);
		this.props.getStatus(userId);
	}
	render() {
		return <div>
			<Profile {...this.props}
				profile={this.props.profile}
				status={this.props.status}
				updateStatus={this.props.updateStatus} />
		</div>
	}
}

let msp = (state) => ({
	profile: state.profile.profile,
	user: state.auth.userId,
	isAuth: state.auth.isAuth,
	status: state.profile.status
})

export default
	compose(
		connect(msp, { getProfile, getStatus, updateStatus }),
		withRouter
	)(ProfileContainer);