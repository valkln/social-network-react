import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfile, getStatus, updateStatus, changePhoto, updateProfile } from "../../redux/profile-reducer";
import { RouteComponentProps, withRouter } from "react-router";
import { compose } from "redux";
import { AppStateType } from "../../redux/redux-store";
import { ProfileType } from "../../types/types";
type Tmstp = {
	profile: ProfileType
	user: number
	isAuth: boolean
	status: string
}
type Tmdtp = {
	getProfile: (id: number) => void
	getStatus: (id: number) => void
	updateStatus: (status: string) => void
	changePhoto: (file: File) => void
	updateProfile: (profile: ProfileType) => void
}

type Tprops = Tmstp & Tmdtp & RouteComponentProps<{ userId: string }>
class ProfileContainer extends React.Component<Tprops> {
	componentDidMount() {
		this.updateProfile();
	}
	componentDidUpdate(prevProps: Tprops) {
		if (this.props.match.params.userId !== prevProps.match.params.userId) {
			this.updateProfile();
		}
	}
	updateProfile() {
		let userId = +this.props.match.params.userId;
		if (!userId) {
			userId = this.props.user
			if (!userId) {
				this.props.history.push('/login');
			}
		}
		this.props.getProfile(userId);
		this.props.getStatus(userId);
	}
	render() {
		return <div>
			<Profile {...this.props}
				isOwner={!this.props.match.params.userId}
				profile={this.props.profile}
				status={this.props.status}
				changePhoto={this.props.changePhoto}
				updateStatus={this.props.updateStatus}
				updateProfile={this.props.updateProfile} />
		</div>
	}
}
let mstp = (state: AppStateType) => ({
	profile: state.profile.profile,
	user: state.auth.userId,
	isAuth: state.auth.isAuth,
	status: state.profile.status
})
export default
	compose(
		connect(mstp, { getProfile, getStatus, updateStatus, changePhoto, updateProfile }),
		withRouter
	)(ProfileContainer) as React.ComponentType