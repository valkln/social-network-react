import s from './Messages.module.css';
import { NavLink } from 'react-router-dom';
export default function Messages(props) {
	return (
		<div className={s.Messages}>
			<div className={s.dialogues}>
				<Dialogue name='Vova' id='1' />
				<Dialogue name='Yulia' id='2' />
				<Dialogue name='Vitya' id='3' />
				<Dialogue name='Arsen' id='4' />
			</div>
			<div className={s.messaging}>
				<Message message="I wasn't re-elected" />
				<Message message='How are you?' />
				<Message message='Hi' />
				<Message message='I thought we were in love' />
			</div>
		</div>
	);
}

function Dialogue(props) {
	let path = '/messages/' + props.id;
	return (
		<div className={s.dialogue}><NavLink to={path}>{props.name}</NavLink></div>
	)
}

function Message(props) {

	return <div className={s.message}>{props.message}</div>
}