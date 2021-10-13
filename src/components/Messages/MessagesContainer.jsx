import { connect } from 'react-redux';
import { compose } from 'redux';
import AuthRedirect from '../../hoc/AuthRedirect.js';
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

export default compose(
	connect(msp, mdp),
	AuthRedirect)(Messages);