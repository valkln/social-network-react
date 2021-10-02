import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'
import ava from '../../img/ava.png'
const Navbar = () => {
	return (
		<nav className={s.nav}>
			<ul>
				<NavLink to='/profile' activeClassName={s.active} className={s.link}><li className={s.item}>Profile</li></NavLink>
				<NavLink to='/messages' activeClassName={s.active} className={s.link}><li className={s.item}>Messages</li></NavLink>
				<NavLink to='/users' activeClassName={s.active} className={s.link}><li className={s.item}>Find Users</li></NavLink>
				<div className={s.friends_online}>
					<p className={s.title}>online: 3</p>
					<div className={s.row}>
						<div className={s.friend}>
							<div className={s.ava}><img src={ava} alt='' /></div>
							<div className={s.name}>Arsen</div>
						</div>
						<div className={s.friend}>
							<div className={s.ava}><img src={ava} alt='' /></div>
							<div className={s.name}>Andrey</div>
						</div>
						<div className={s.friend}>
							<div className={s.ava}><img src={ava} alt='' /></div>
							<div className={s.name}>Misha</div>
						</div>
					</div>
				</div>
				<NavLink to='/settings' activeClassName={s.active} className={s.link}><li className={s.item}>Settings</li></NavLink>
			</ul>
		</nav>
	);
}

export default Navbar;