import React from 'react';
import AddPost from './AddPost';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import { AppStateType } from '../../../redux/redux-store';
import { actions } from '../../../redux/profile-reducer'
import { connect, useSelector } from 'react-redux';
import { PostType, ProfileType } from '../../../types/types';
import { getPosts } from '../../../redux/profile-selectors';
type Tprops = {
	profile: ProfileType
}
const MyPosts: React.FC<Tprops> = ({ profile }) => {
	const posts = useSelector(getPosts)
	let postsElements = posts.map(p => <Post userpic={profile.photos.small} message={p.message} likesCount={p.likesCount} key={p.id} />)
	return (
		<div className={s.MyPosts}>
			<h3>posts</h3>
			<p className={s.new}>What's new?</p>
			<AddPost />
			<div className={s.posts}>{postsElements}</div>
		</ div>
	);
}


let msp = (state: AppStateType) => {
	return {
		posts: state.profile.posts
	}
};
const MyPostsContainer = connect(msp, { addPostAC: actions.addPostAC })(MyPosts)
export default MyPostsContainer;