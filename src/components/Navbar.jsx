import s from './Navbar.module.css'
export default function Navbar() {
	return (
		<nav className={s.nav}>
			<ul>
				<a href='#' className={s.link}><li className={s.item}>Profile</li></a>
				<a href='#' className={s.link}><li className={s.item}>Messages</li></a>
				<a href='#' className={s.link}><li className={s.item}>News</li></a>
				<a href='#' className={s.link}><li className={s.item}>Music</li></a>
				<a href='#' className={s.link}><li className={s.item}>Settings</li></a>
			</ul>
		</nav>
	);
}