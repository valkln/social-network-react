import React from 'react';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/messages-reducer.js'
import Messages from './Messages';
export default function MessagesContainer(props) {
	let state = props.store.getState().messages;
	let addNewMessage = () => {
		props.store.dispatch(addMessageActionCreator());
	}
	let onTextChange = (text) => {
		props.store.dispatch(updateMessageTextActionCreator(text));
	}

	return (<Messages
		updateNewMessageText={onTextChange}
		addMessage={addNewMessage}
		messages={state.messages}
		dialogues={state.dialogues}
	/>);
}