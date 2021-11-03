import { getAuth } from "./auth-reducer";
import { InferActionTypes } from "./redux-store";

let initialState = {
	initialized: false
};
type initialStateType = typeof initialState
export const appReducer = (state = initialState, action: ActionTypes): initialStateType => {
	switch (action.type) {
		case 'SET_INIT':
			return {
				...state,
				initialized: true
			}
		default: return state
	}
};
const actions = {
	setInit: () => ({ type: 'SET_INIT' } as const)
}
type ActionTypes = InferActionTypes<typeof actions>
export const getInit = () => (dispatch: any) => {
	let promise = dispatch(getAuth());
	Promise.all([promise])
		.then(() => {
			dispatch(actions.setInit());
		})
}

export default appReducer;