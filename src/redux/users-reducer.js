import { usersAPI } from "../API/api"

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'

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
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.id) {
						return { ...u, followed: !action.followed }
					}
					return u
				})
			}
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
export const getUsers = (currentPage, pageSize) => async (dispatch) => {
	dispatch(toggleIsFetching(true));
	dispatch(setCurrentPage(currentPage))
	let data = await usersAPI.getUsers(currentPage, pageSize)
	dispatch(setUsers(data.items))
	dispatch(setUsersTotalCount(data.totalCount))
	dispatch(toggleIsFetching(false));
}
export const followUnfollowFlow = async (dispatch, id, followed, apiMethod) => {
	dispatch(toggleIsFollowingInProgress(true, id));
	let response = await apiMethod(id)
	if (response.resultCode === 0) {
		dispatch(toggleFollow(id, followed))
	}
	dispatch(toggleIsFollowingInProgress(false, id));

}
export const followPost = (id, followed) => async (dispatch) => {
	followUnfollowFlow(dispatch, id, followed, usersAPI.followPost.bind(usersAPI))
}

export const followDelete = (id, followed) => async (dispatch) => {
	followUnfollowFlow(dispatch, id, followed, usersAPI.followDelete.bind(usersAPI))
}

export default usersReducer;