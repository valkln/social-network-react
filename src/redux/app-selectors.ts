import { AppStateType } from './redux-store';
export const getInitState = (state: AppStateType) => {
	return state.app.initialized
}