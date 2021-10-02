import s from './User.module.css';
import defUserPic from '../../../img/ava.png';
import { NavLink } from 'react-router-dom';
export default function User(props) {
	return <div className={s.user}>
		<div className={s.name}>{props.name}</div>
		<NavLink to={'/profile/' + props.id}> <div className={s.userpic}> <img src={props.userpic !== null ? props.userpic : defUserPic} /> </div> </NavLink>
		{props.followed ?
			<button className={s.button} onClick={() => { props.unfollow(props.id) }}>Unfollow</button>
			:
			<button className={s.button} onClick={() => { props.follow(props.id) }}>Follow</button>
		}
	</div>
}