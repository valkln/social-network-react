import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router";
import AuthRedirect from "../../hoc/AuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) { userId = this.props.user }
		this.props.getProfile(userId)
	}
	render() {
		return <div>
			<Profile {...this.props} profile={this.props.profile} />
		</div>
	}
}

let msp = (state) => ({
	profile: state.profile.profile,
	user: state.auth.userId
})

export default
	compose(
		connect(msp, { getProfile }),
		withRouter,
		AuthRedirect
	)(ProfileContainer);