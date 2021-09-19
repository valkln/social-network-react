const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
let initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 21,
	currentPage: 1
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
		case SET_CURRENT_PAGE: {
			return { ...state, currentPage: action.currentPage }
		}
		default: return state
	}
}
export const toggleFollowAC = (id, followed) => ({ type: TOGGLE_FOLLOW, id, followed })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export default usersReducer;