import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'
const Navbar = () => {
	return (
		<nav className={s.nav}>
			<ul>
				<NavLink to='/profile' activeClassName={s.active} className={s.link}><li className={s.item}>Profile</li></NavLink>
				<NavLink to='/messages' activeClassName={s.active} className={s.link}><li className={s.item}>Messages</li></NavLink>
				<NavLink to='/users' activeClassName={s.active} className={s.link}><li className={s.item}>Find Users</li></NavLink>
				<NavLink to='/settings' activeClassName={s.active} className={s.link}><li className={s.item}>Settings</li></NavLink>
			</ul>
		</nav>
	);
}

export default Navbar;