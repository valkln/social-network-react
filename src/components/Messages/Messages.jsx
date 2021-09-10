import s from './Messages.module.css';
import { NavLink } from 'react-router-dom';
export default function Messages(props) {
	let dialoguesData = [
		{ id: 1, name: 'Vova' },
		{ id: 2, name: 'Yulia' },
		{ id: 3, name: 'Vitya' },
		{ id: 4, name: 'Arsen' }
	]
	let messagesData = [
		{ id: 1, message: "I wasn't re-elected" },
		{ id: 2, message: 'How are you?' },
		{ id: 3, message: 'Hi' },
		{ id: 4, message: 'I thought we were in love' }
	]
	let dialoguesElements = dialoguesData.map(dialogue => <Dialogue name={dialogue.name} id={dialogue.id} />);
	let messagesElements = messagesData.map(message => <Message message={message.message} />)
	return (
		<div className={s.Messages}>
			<div className={s.dialogues}>{dialoguesElements}</div>
			<div className={s.messaging}>{messagesElements}</div>
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