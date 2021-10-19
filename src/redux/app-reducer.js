import { getAuth } from "./auth-reducer";

const SET_INIT = 'SET-INIT';
let initialState = {
	initialized: false
};
export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_INIT:
			return {
				...state,
				initialized: true
			}
		default: return state
	}
};
export const setInit = () => ({ type: SET_INIT })

export const getInit = () => (dispatch) => {
	let promise = dispatch(getAuth);
	Promise.all([promise])
		.then(() => {
			dispatch(setInit())
		})
}

export default appReducer;