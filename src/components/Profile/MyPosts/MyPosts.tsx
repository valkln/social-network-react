import React from 'react';
import AddPost from './AddPost';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import { AppStateType } from '../../../redux/redux-store';
import { connect, useSelector } from 'react-redux';
import { ProfileType } from '../../../types/types';
import { getPosts } from '../../../redux/profile-selectors';
import { Typography } from '@mui/material';
type Tprops = {
	profile: ProfileType
	isOwner: boolean
}
const MyPosts: React.FC<Tprops> = ({ profile, isOwner }) => {
	const posts = useSelector(getPosts)
	let postsElements = posts.map(p => <Post userpic={profile.photos.small} message={p.message} likesCount={p.likesCount} key={p.id} />)
	return (
		<div className={s.MyPosts}>
			<Typography variant='h3' component='h3'>Posts</Typography>
			{isOwner ? <><p className={s.new}>What's new?</p><AddPost /></> : null}
			<div className={s.posts}>{postsElements}</div>
		</ div>
	);
}


let msp = (state: AppStateType) => {
	return {
		posts: state.profile.posts
	}
};
export default connect(msp, {})(MyPosts)