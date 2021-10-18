import React from 'react';
import s from './Messages.module.css';
import Message from './Message/Message';
import Dialogue from './Dialogue/Dialogue';
import AddMessage from './AddMessage';

const Messages = (props) => {
	let dialoguesElements = props.dialogues.map(d => <Dialogue name={d.name} id={d.id} key={d.id} />);
	let messagesElements = props.messages.map(m => <Message message={m.message} key={m.id} />);
	return (
		<div className={s.Messages}>
			<div className={s.dialogues}>{dialoguesElements}</div>
			<div className={s.messaging}>
				{messagesElements}
				<AddMessage addMessage={props.addMessage} />
			</div>
		</div>
	);
}
export default Messages;