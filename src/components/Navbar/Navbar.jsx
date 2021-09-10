import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'
export default function Navbar() {
	return (
		<nav className={s.nav}>
			<ul>
				<NavLink to='/profile' activeClassName={s.active} className={s.link}><li className={s.item}>Profile</li></NavLink>
				<NavLink to='/messages' activeClassName={s.active} className={s.link}><li className={s.item}>Messages</li></NavLink>
				<NavLink to='/news' activeClassName={s.active} className={s.link}><li className={s.item}>News</li></NavLink>
				<NavLink to='/music' activeClassName={s.active} className={s.link}><li className={s.item}>Music</li></NavLink>
				<NavLink to='/settings' activeClassName={s.active} className={s.link}><li className={s.item}>Settings</li></NavLink>
			</ul>
		</nav>
	);
}