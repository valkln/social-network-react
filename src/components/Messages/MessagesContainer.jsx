import { connect } from 'react-redux';
import { compose } from 'redux';
import AuthRedirect from '../../hoc/AuthRedirect.js';
import { addMessageAC } from '../../redux/messages-reducer.js'
import Messages from './Messages';
let msp = (state) => {
	return {
		messages: state.messages.messages,
		dialogues: state.messages.dialogues
	}
};
let mdp = (dispatch) => {
	return {
		addMessage: (data) => { dispatch(addMessageAC(data)) }
	}
};

export default compose(
	connect(msp, mdp),
	AuthRedirect)(Messages);