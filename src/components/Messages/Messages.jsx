import React from 'react';
import s from './Messages.module.css';
import Message from './Message/Message';
import Dialogue from './Dialogue/Dialogue';
export default function Messages(props) {
	let dialoguesElements = props.state.dialogues.map(d => <Dialogue name={d.name} id={d.id} />);
	let messagesElements = props.state.messages.map(m => <Message message={m.message} />)
	let newMessageElement = React.createRef();
	let addNewMessage = () => {
		props.addMessage();
	}
	let onTextChange = () => {
		let text = newMessageElement.current.value;
		props.updateNewMessageText(text);
	}

	return (
		<div className={s.Messages}>
			<div className={s.dialogues}>{dialoguesElements}</div>
			<div className={s.messaging}>
				{messagesElements}
				<div className={s.myMessage}>
					<textarea className={s.text} onChange={onTextChange} ref={newMessageElement} value={props.newMessageText} ></textarea>
					<button className={s.send} onClick={addNewMessage}>send</button>
				</div>
			</div>
		</div>
	);
}