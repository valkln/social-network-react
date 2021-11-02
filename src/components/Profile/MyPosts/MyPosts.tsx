import React from 'react';
import AddPost from './AddPost';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import { AppStateType } from '../../../redux/redux-store';
import { addPostAC } from '../../../redux/profile-reducer'
import { connect } from 'react-redux';
import { PostType, ProfileType } from '../../../types/types';
type Tprops = {
	addPostAC: (payload: string) => void,
	posts: PostType[]
	profile: ProfileType
}
const MyPosts: React.FC<Tprops> = (props) => {
	let postsElements = props.posts.map(p => <Post userpic={props.profile.photos.small} message={p.message} likesCount={p.likesCount} key={p.id} />)
	return (
		<div className={s.MyPosts}>
			<h3>posts</h3>
			<p className={s.new}>What's new?</p>
			<AddPost addPost={props.addPostAC} />
			<div className={s.posts}>{postsElements}</div>
		</ div>
	);
}


let msp = (state: AppStateType) => {
	return {
		posts: state.profile.posts
	}
};
const MyPostsContainer = connect(msp, { addPostAC })(MyPosts)
export default MyPostsContainer;