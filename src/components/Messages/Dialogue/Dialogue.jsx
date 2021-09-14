import s from './Dialogue.module.css';
import { NavLink } from 'react-router-dom';
export default function Dialogue(props) {
	let path = '/messages/' + props.id;
	return (
		<NavLink to={path} activeClassName={s.active} className={s.dialogue}>{props.name}</NavLink>
	)
}