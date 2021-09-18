import s from './User.module.css';
import defUserPic from '../../../img/ava.png';
export default function User(props) {
	return <div className={s.user}>
		<div className={s.name}>{props.name}</div>
		<div className={s.userpic}> <img src={props.userpic !== null ? props.userpic : defUserPic} /> </div>
		<button className={s.button} onClick={() => { props.follow(props.id, props.followed) }}>
			{props.followed ? 'unfollow' : 'follow'}
		</button>
	</div>
}