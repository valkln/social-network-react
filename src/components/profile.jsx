import s from './Profile.module.css'
import ava from '../img/peter.jpg';
export default function Profile() {
	return (
		<div className={s.profile}>
			<div className={s.wallpaper}><img src='https://3dnews.ru/assets/external/illustrations/2017/06/14/953915/01.jpg'></img></div>
			<div className={s.user}>
				<div className={s.userpic}><img src={ava}></img></div>
				<div className={s.userinfo}>
					<div className={s.username}>Peter Lions</div>
					<div className={s.userbio}>Ex-President of Ukraine</div>
				</div>
			</div>
			<div className={s.posts}>posts</div>
			<div><h3>new posts</h3>
				<div>post 1</div>
				<div>post 2</div>
				<div>post 3</div>
			</div>
		</div>
	);
}