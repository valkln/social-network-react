import { AppStateType } from './redux-store';
export const getMessages = (state: AppStateType) => {
	return state.messages.messages
}
export const getDialogues = (state: AppStateType) => {
	return state.messages.dialogues
}