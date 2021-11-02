import { Dispatch } from 'redux';
import { getAuth } from "./auth-reducer";
export type initialStateType = {
	initialized: boolean
}
const SET_INIT = 'SET-INIT';
let initialState: initialStateType = {
	initialized: false
};
export const appReducer = (state = initialState, action: any): initialStateType => {
	switch (action.type) {
		case SET_INIT:
			return {
				...state,
				initialized: true
			}
		default: return state
	}
};
type setInitActionType = {
	type: typeof SET_INIT
}
export const setInit = (): setInitActionType => ({ type: SET_INIT })

export const getInit = () => (dispatch: any) => {
	let promise = dispatch(getAuth());
	Promise.all([promise])
		.then(() => {
			dispatch(setInit());
		})
}

export default appReducer;