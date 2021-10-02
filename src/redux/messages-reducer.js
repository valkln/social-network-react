const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
let initialState = {
	dialogues: [
		{ id: 1, name: 'User 1' },
		{ id: 2, name: 'User 2' },
		{ id: 3, name: 'User 3' },
		{ id: 4, name: 'User 4' },
		{ id: 5, name: 'User 5' },
		{ id: 6, name: 'User 6' }
	],
	messages: [
		{ id: 1, message: "Message 1" },
		{ id: 2, message: 'Message 2' },
		{ id: 3, message: 'Message 3' },
		{ id: 4, message: 'Message 4' },
		{ id: 5, message: 'Message 5' },
		{ id: 6, message: 'Message 6' }
	],
	newMessageText: ''
}
const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			return {
				...state,
				messages: [...state.messages, { id: 7, message: state.newMessageText }],
				newMessageText: ''
			}
		case UPDATE_MESSAGE_TEXT:
			return {
				...state,
				newMessageText: action.newText
			}
		default: return state
	}
}
export const addMessageAC = () => ({ type: ADD_MESSAGE })
export const updateMessageTextAC = (text) =>
	({ type: UPDATE_MESSAGE_TEXT, newText: text })
export default messagesReducer;