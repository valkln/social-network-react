import React from 'react';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/messages-reducer.js'
import StoreContext from '../../StoreContext.js';
import Messages from './Messages';
export default function MessagesContainer() {
	return (
		<StoreContext.Consumer>
			{
				(store) => {
					let state = store.getState().messages;
					let addNewMessage = () => {
						store.dispatch(addMessageActionCreator());
					}
					let onTextChange = (text) => {
						store.dispatch(updateMessageTextActionCreator(text));
					}
					return <Messages
						updateNewMessageText={onTextChange}
						addMessage={addNewMessage}
						messages={state.messages}
						dialogues={state.dialogues}
					/>
				}}</StoreContext.Consumer>
	)
}