const ADD_MESSAGE = 'ADD-MESSAGE';
export type dialoguesType = {
	id: number,
	name: string
}
export type messageType = {
	id: number,
	message: string
}
let initialState = {
	dialogues: [
		{ id: 1, name: 'User 1' },
		{ id: 2, name: 'User 2' },
		{ id: 3, name: 'User 3' },
		{ id: 4, name: 'User 4' },
		{ id: 5, name: 'User 5' },
		{ id: 6, name: 'User 6' }
	] as Array<dialoguesType>,
	messages: [
		{ id: 1, message: "Message 1" },
		{ id: 2, message: 'Message 2' },
		{ id: 3, message: 'Message 3' },
		{ id: 4, message: 'Message 4' },
		{ id: 5, message: 'Message 5' },
		{ id: 6, message: 'Message 6' }
	] as Array<messageType>
}
export type initialStateType = typeof initialState
const messagesReducer = (state = initialState, action: any): initialStateType => {
	switch (action.type) {
		case ADD_MESSAGE:
			return {
				...state,
				messages: [...state.messages, { id: 7, message: action.message }]
			}
		default: return state
	}
}
type AddMessageType = {
	type: typeof ADD_MESSAGE,
	message: string
}
export const addMessage = (message: string): AddMessageType => ({ type: ADD_MESSAGE, message })
export default messagesReducer;