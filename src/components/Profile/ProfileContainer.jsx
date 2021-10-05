import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) { userId = 2 }
		this.props.getProfile(userId)
	}
	render() {
		return <div>
			<Profile {...this.props} profile={this.props.profile} />
		</div>
	}
}
let msp = (state) => ({
	profile: state.profile.profile
})

let ContainerWithUrlData = withRouter(ProfileContainer);
export default connect(msp, { getProfile })(ContainerWithUrlData);