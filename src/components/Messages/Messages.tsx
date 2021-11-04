import React from 'react';
import s from './Messages.module.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import AuthRedirect from '../../hoc/AuthRedirect';
import { actions, dialoguesType, messageType } from '../../redux/messages-reducer'
import Message from './Message/Message';
import Dialogue from './Dialogue/Dialogue';
import AddMessage from './AddMessage';
import { AppStateType } from '../../redux/redux-store'
type Tprops = {
	dialogues: dialoguesType[]
	messages: messageType[]
	addMessage: (message: string) => void
}
const Messages: React.FC<Tprops> = (props) => {
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
let msp = (state: AppStateType) => {
	return {
		messages: state.messages.messages,
		dialogues: state.messages.dialogues
	}
};
export default compose(
	connect(msp, { addMessage: actions.addMessage }),
	AuthRedirect)(Messages) as React.ComponentType