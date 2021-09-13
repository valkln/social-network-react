import s from './Header.module.css'
import logo from '../../img/logo.png'
export default function Header() {
	return (
		<header className={s.header}>
			<img src={logo} alt=''></img>
			<div className={s.title}>Network</div>
		</header>
	);
}