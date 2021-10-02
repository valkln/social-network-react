import { connect } from 'react-redux';
import { addMessageAC, updateMessageTextAC } from '../../redux/messages-reducer.js'
import Messages from './Messages';
let msp = (state) => {
	return {
		messages: state.messages.messages,
		dialogues: state.messages.dialogues,
		newMessageText: state.messages.newMessageText
	}
};
let mdp = (dispatch) => {
	return {
		updateNewMessageText: (text) => {
			let action = updateMessageTextAC(text)
			dispatch(action)
		},
		addMessage: () => { dispatch(addMessageAC()) }
	}
};
const MessagesContainer = connect(msp, mdp)(Messages);
export default MessagesContainer