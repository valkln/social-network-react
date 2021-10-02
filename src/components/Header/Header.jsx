import s from './Header.module.css'
import logo from '../../img/logo.png'
import { NavLink } from 'react-router-dom';
export default function Header(props) {
	return (
		<header className={s.header}>
			<div className={s.logoblock}><img src={logo} alt=''></img>
				<div className={s.title}>Network</div>
			</div>
			{props.isAuth ? <div div className={s.authblock}>{props.login}</div> : <div className={s.authblock}><NavLink to={'/login'}>Login</NavLink></div>
			}
		</header >
	);
};