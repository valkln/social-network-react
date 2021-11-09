import React from 'react';
import s from './Messages.module.css';
import { useSelector } from 'react-redux';
import AuthRedirect from '../../hoc/AuthRedirect';
import Message from './Message/Message';
import Dialogue from './Dialogue/Dialogue';
import AddMessage from './AddMessage';
import { AppStateType } from '../../redux/redux-store'
import { getDialogues, getMessages } from '../../redux/messages-selectors';

const Messages: React.FC = () => {
	const dialogues = useSelector(getDialogues)
	const messages = useSelector(getMessages)
	let dialoguesElements = dialogues.map(d => <Dialogue name={d.name} id={d.id} key={d.id} />);
	let messagesElements = messages.map(m => <Message message={m.message} key={m.id} />);
	return (
		<div className={s.Messages}>
			<div className={s.dialogues}>{dialoguesElements}</div>
			<div className={s.messaging}>
				{messagesElements}
				<AddMessage />
			</div>
		</div>
	);
}
let msp = (state: AppStateType) => {
	return {
		messages: state.messages.messages,
		dialogues: state.messages.dialogues
	}
};
export default AuthRedirect(Messages)