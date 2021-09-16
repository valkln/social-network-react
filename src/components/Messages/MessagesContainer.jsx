import { connect } from 'react-redux';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/messages-reducer.js'
import Messages from './Messages';
let mapStateToProps = (state) => {
	return {
		messages: state.messages.messages,
		dialogues: state.messages.dialogues,
		newMessageText: state.messages.newMessageText
	}
};
let mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageText: (text) => {
			let action = updateMessageTextActionCreator(text)
			dispatch(action)
		},
		addMessage: () => { dispatch(addMessageActionCreator()) }
	}
};
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);
export default MessagesContainer