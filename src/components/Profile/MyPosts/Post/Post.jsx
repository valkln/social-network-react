import s from './Post.module.css'
import ava from '../../../../img/peter.jpg';
export default function Post() {
	return (
		<div className={s.Post} >
			<img className={s.ava} src={ava}></img>
			<div className={s.content}><div>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est recusandae velit explicabo atque quis sint, nam sunt id repudiandae reiciendis, accusantium saepe repellat quia, consequatur aspernatur nemo. Eius, temporibus quae.</div>
				<span>like</span>
				<span>repost</span>
			</div>

		</ div>
	);
}