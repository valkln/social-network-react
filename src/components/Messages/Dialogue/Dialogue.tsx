import React from 'react';
import s from './Dialogue.module.css';
import { NavLink } from 'react-router-dom';
import { ListItem } from '@mui/material';
type Tprops = {
	id: number,
	name: string
}
const Dialogue: React.FC<Tprops> = ({ id, name }) => {
	let path = '/messages/' + id;
	return (
		<NavLink to={path} className={s.dialogue} activeClassName={s.active} ><ListItem>{name}</ListItem></NavLink>
	)
}
export default Dialogue;