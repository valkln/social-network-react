import s from './User.module.css';
import defUserPic from '../../../img/ava.png';
import { NavLink } from 'react-router-dom';
export default function User(props) {
	return <div className={s.user}>
		<div className={s.name}>{props.name}</div>
		<NavLink to={'/profile/' + props.id}> <div className={s.userpic}> <img src={props.userpic !== null ? props.userpic : defUserPic} /> </div> </NavLink>
		<button className={s.button} onClick={() => { props.toggleFollow(props.id, props.followed) }}>
			{props.followed ? 'unfollow' : 'follow'}
		</button>
	</div>
}