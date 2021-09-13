import s from './Post.module.css'
import ava from '../../../../img/peter.jpg';
export default function Post(props) {
	return (
		<div className={s.Post} >
			<img className={s.ava} src={ava} alt=''></img>
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