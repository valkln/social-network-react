import { usersAPI } from "../API/api"

const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE-IS-FOLLOWING-IN-PROGRESS'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'

let initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: []
}
const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_FOLLOW:
			if (action.followed === true) {
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
			else if (action.followed === false) {
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
			else break
		case SET_USERS: {
			return { ...state, users: action.users }
		}
		case SET_CURRENT_PAGE: {
			return { ...state, currentPage: action.currentPage }
		}
		case SET_TOTAL_COUNT: {
			return { ...state, totalUsersCount: action.totalCount }
		}
		case TOGGLE_IS_FETCHING: {
			return { ...state, isFetching: action.isFetching }
		}
		case TOGGLE_IS_FOLLOWING_IN_PROGRESS: {
			return {
				...state,
				followingInProgress: action.followingInProgress
					? [...state.followingInProgress, action.id]
					: [...state.followingInProgress.filter(id => id !== action.id)]
			}
		}
		default: return state
	}
}
//action creators
export const toggleFollow = (id, followed) => ({ type: TOGGLE_FOLLOW, id, followed })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleIsFollowingInProgress = (followingInProgress, id) => ({ type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, followingInProgress, id })
//thunk creators
export const getUsers = (currentPage, pageSize) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true));
		dispatch(setCurrentPage(currentPage))
		usersAPI.getUsers(currentPage, pageSize).then(data => {
			dispatch(setUsers(data.items))
			dispatch(setUsersTotalCount(data.totalCount))
			dispatch(toggleIsFetching(false));
		});
	}
}
export const followPost = (id, followed) => {
	return (dispatch) => {
		dispatch(toggleIsFollowingInProgress(true, id));
		usersAPI.followPost(id).then(response => {
			if (response.resultCode === 0) {
				dispatch(toggleFollow(id, followed))
			}
			dispatch(toggleIsFollowingInProgress(false, id));
		});
	}
}
export const followDelete = (id, followed) => {
	return (dispatch) => {
		dispatch(toggleIsFollowingInProgress(true, id));
		usersAPI.followDelete(id).then(response => {
			if (response.resultCode === 0) {
				dispatch(toggleFollow(id, followed))
			}
			dispatch(toggleIsFollowingInProgress(false, id));
		});
	}
}

export default usersReducer;