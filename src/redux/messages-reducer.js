const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
let initialState = {
	dialogues: [
		{ id: 1, name: 'Vladimir' },
		{ id: 2, name: 'Yulia' },
		{ id: 3, name: 'Vitya' },
		{ id: 4, name: 'Arsen' },
		{ id: 5, name: 'Misha' },
		{ id: 6, name: 'Andrey' }
	],
	messages: [
		{ id: 1, message: "Shaking your hand!" },
		{ id: 2, message: 'How are you?' },
		{ id: 3, message: 'Hi' },
		{ id: 4, message: 'I thought we were in love' },
		{ id: 5, message: 'I hate you' },
		{ id: 6, message: 'Are your boys ready?' }
	],
	newMessageText: ''
}
const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			let newMessage = {
				id: 7,
				message: state.newMessageText
			}
			state.messages.push(newMessage);
			state.newMessageText = '';
			return state;
		case UPDATE_MESSAGE_TEXT:
			state.newMessageText = action.newText;
			return state;
		default: return state
	}
}
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateMessageTextActionCreator = (text) =>
	({ type: UPDATE_MESSAGE_TEXT, newText: text })
export default messagesReducer;