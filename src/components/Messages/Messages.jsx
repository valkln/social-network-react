import s from './Messages.module.css';
import Message from './Message/Message';
import Dialogue from './Dialogue/Dialogue';
export default function Messages(props) {
	let dialoguesElements = props.state.dialogues.map(d => <Dialogue name={d.name} id={d.id} />);
	let messagesElements = props.state.messages.map(m => <Message message={m.message} />)
	return (
		<div className={s.Messages}>
			<div className={s.dialogues}>{dialoguesElements}</div>
			<div className={s.messaging}>
				{messagesElements}
				<div className={s.myMessage}>
					<textarea className={s.text} cols="30" rows="10"></textarea>
					<button className={s.send}>send</button>
				</div>
			</div>
		</div>
	);
}