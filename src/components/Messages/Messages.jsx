import React from 'react';
import s from './Messages.module.css';
import Message from './Message/Message';
import Dialogue from './Dialogue/Dialogue';

export default function Messages(props) {
	let dialoguesElements = props.dialogues.map(d => <Dialogue name={d.name} id={d.id} key={d.id} />);
	let messagesElements = props.messages.map(m => <Message message={m.message} key={m.id} />)
	let newMessageElement = React.createRef();
	let addNewMessage = () => {
		props.addMessage();
	}
	let onTextChange = (event) => {
		let text = event.target.value;
		props.updateNewMessageText(text);
	}

	return (
		<div className={s.Messages}>
			<div className={s.dialogues}>{dialoguesElements}</div>
			<div className={s.messaging}>
				{messagesElements}
				<div className={s.myMessage}>
					<textarea placeholder='Enter your message' className={s.text} ref={newMessageElement} onChange={onTextChange} value={props.newMessageText} />
					<button className={s.send} onClick={addNewMessage}>send</button>
				</div>
			</div>
		</div>
	);
}