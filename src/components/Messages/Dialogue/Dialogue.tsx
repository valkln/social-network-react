import React from 'react';
import s from './Dialogue.module.css';
import { NavLink } from 'react-router-dom';
type Tprops = {
	id: number,
	name: string
}
const Dialogue: React.FC<Tprops> = ({ id, name }) => {
	let path = '/messages/' + id;
	return (
		<NavLink to={path} activeClassName={s.active} className={s.dialogue}>{name}</NavLink>
	)
}
export default Dialogue;