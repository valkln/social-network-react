import React, { useEffect } from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Preloader from '../common/Preloader/Preloader';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, getStatus } from '../../redux/profile-reducer';
import { RouteComponentProps, withRouter } from 'react-router';
import { getProfileData, getStatusData } from '../../redux/profile-selectors';
import { getMyId } from '../../redux/auth-selectors';
type PathParamsType = {
	userId: string
}

const Profile: React.FC<RouteComponentProps<PathParamsType>> = (props) => {
	let profile = useSelector(getProfileData)
	let status = useSelector(getStatusData)
	if (!status) status = ''
	const isOwner = !props.match.params.userId
	const dispatch = useDispatch()
	const myId = useSelector(getMyId)
	useEffect(() => {
		let userId: number | null = +props.match.params.userId
		if (!userId) {
			userId = myId
		}
		if (!userId) {
			props.history.push('/login');
		}
		if (userId) {
			const id = userId
			dispatch(getStatus(id))
			dispatch(getProfile(id))
		}
	}, [] && [props.match.params.userId])
	if (!profile) {
		return <Preloader />
	}
	else return (
		<div>
			<ProfileInfo isOwner={isOwner} profile={profile} status={status} />
			<MyPosts isOwner={isOwner} profile={profile} />
		</div>
	);
};
export default withRouter(Profile)