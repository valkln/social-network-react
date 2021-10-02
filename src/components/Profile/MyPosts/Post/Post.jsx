import s from './Post.module.css'
import defUserPic from '../../../../img/ava.png'
export default function Post(props) {
	return (
		<div className={s.Post} >
			<img className={s.ava} src={props.userpic !== null ? props.userpic : defUserPic} alt='userpic'></img>
			<div className={s.content}>
				<div className={s.message}>{props.message}</div>
				<div className={s.social}>
					<span>like {props.likesCount}</span>
					<span>repost</span>
				</div>
			</div>
		</ div>
	);
}