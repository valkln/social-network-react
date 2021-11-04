import React from 'react';
import s from './Header.module.css'
import logo from '../../img/logo.png'
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { logout } from "../../redux/auth-reducer";
import { AppStateType } from '../../redux/redux-store';
type Tprops = {
	logout: () => void
	login: string | null
	isAuth: boolean
}
const Header: React.FC<Tprops> = (props) => {
	return (
		<header className={s.header}>
			<div className={s.logoblock}><img src={logo} alt=''></img>
				<div className={s.title}>Network</div>
			</div>
			{props.isAuth ?
				<div className={s.authblock}>{props.login} <button className={s.logout} onClick={props.logout} >log out</button> </div>
				: <div className={s.authblock}><NavLink to={'/login'}>Login</NavLink></div>
			}
		</header >
	);
};
const msp = (state: AppStateType) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
});
export default connect(msp, { logout })(Header);