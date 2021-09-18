const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW'
const SET_USERS = 'SET-USERS'
let initialState = {
	users: [
		//{ id: 1, followed: true, fullName: 'Arsen Avakov', profession: 'Retired Minister', location: { country: 'Italy', city: 'San Felice Circeo' } },
		//{ id: 2, followed: true, fullName: 'Alex Avakov', profession: 'Gangster', location: { country: 'Ukraine', city: 'Kyiv' } },
		//{ id: 3, followed: true, fullName: 'Yulia Tymoshenko', profession: 'Member of Parliament', location: { country: 'Ukraine', city: 'Kyiv' } },
		//{ id: 4, followed: false, fullName: 'Ilya Kyva', profession: 'Scientist', location: { country: 'Ukraine', city: 'Kyiv' } }
	]
}
const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_FOLLOW:
			if (action.followed == true) {
				return {
					...state,
					users: state.users.map(u => {
						if (u.id === action.id) {
							return { ...u, followed: false }
						}
						return u
					})
				}
			}
			else if (action.followed == false) {
				return {
					...state,
					users: state.users.map(u => {
						if (u.id === action.id) {
							return { ...u, followed: true }
						}
						return u
					})
				}
			}
		case SET_USERS: {
			return { ...state, users: [...state.users, ...action.users] }
		}
		default: return state
	}
}
export const toggleFollowAC = (id, followed) => ({ type: TOGGLE_FOLLOW, id, followed })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export default usersReducer;