import s from './ProfileInfo.module.css'
import ava from '../../../img/peter.jpg';
export default function ProfileInfo() {
	return (
		<div className={s.profile}>
			<div className={s.wallpaper}><img src='https://3dnews.ru/assets/external/illustrations/2017/06/14/953915/01.jpg'></img></div>
			<div className={s.user}>
				<div className={s.userpic}><img src={ava}></img></div>
				<div className={s.userinfo}>
					<div className={s.username}>Peter Lions</div>
					<div className={s.userbio}>Ex-President of Ukraine</div>
					<div className={s.usercity}>City: Kyiv</div>
					<div className={s.userage}>Age: 56</div>
				</div>
			</div>
		</div>
	);
}