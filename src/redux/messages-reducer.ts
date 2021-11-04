import { InferActionTypes } from "./redux-store"

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
const messagesReducer = (state = initialState, action: ActionTypes): initialStateType => {
	switch (action.type) {
		case 'ADD_MESSAGE':
			return {
				...state,
				messages: [...state.messages, { id: 7, message: action.message }]
			}
		default: return state
	}
}
export const actions = {
	addMessage: (message: string) => ({ type: 'ADD_MESSAGE', message } as const)
}
type ActionTypes = InferActionTypes<typeof actions>
export default messagesReducer;