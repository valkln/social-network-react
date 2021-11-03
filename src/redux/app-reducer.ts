import { Dispatch } from 'redux';
import { getAuth } from "./auth-reducer";
export type initialStateType = {
	initialized: boolean
}
let initialState: initialStateType = {
	initialized: false
};
export const appReducer = (state = initialState, action: any): initialStateType => {
	switch (action.type) {
		case 'SET_INIT':
			return {
				...state,
				initialized: true
			}
		default: return state
	}
};
export const setInit = () => ({ type: 'SET_INIT' })

export const getInit = () => (dispatch: any) => {
	let promise = dispatch(getAuth());
	Promise.all([promise])
		.then(() => {
			dispatch(setInit());
		})
}

export default appReducer;