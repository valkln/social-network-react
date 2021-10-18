import s from './Post.module.css'
import defUserPic from '../../../../img/ava.png'
const Post = (props) => {
	return (
		<div className={s.Post} >
			<img className={s.ava} src={props.userpic !== null ? props.userpic : defUserPic} alt='userpic'></img>
			<div className={s.content}>
				<div className={s.message}>{props.message}</div>
				<div className={s.social}>
					<span className={s.span}>like {props.likesCount}</span>
					<span className={s.span}>repost</span>
				</div>
			</div>
		</ div>
	);
}

export default Post;