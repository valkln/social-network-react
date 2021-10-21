import React from 'react';
import s from './Dialogue.module.css';
import { NavLink } from 'react-router-dom';
const Dialogue = (props) => {
	let path = '/messages/' + props.id;
	return (
		<NavLink to={path} activeClassName={s.active} className={s.dialogue}>{props.name}</NavLink>
	)
}
export default Dialogue;