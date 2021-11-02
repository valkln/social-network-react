import { UserType } from './../types/types';
import { usersAPI } from "../API/api"
import { Dispatch } from 'redux';
import { AppStateType } from './redux-store';
import { ThunkAction } from 'redux-thunk';

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'



let initialState = {
	users: [] as Array<UserType>,
	pageSize: 10 as number,
	totalUsersCount: 0 as number,
	currentPage: 1 as number,
	isFetching: false as boolean,
	followingInProgress: [] as Array<number> //array of user ID's
}
type initialStateType = typeof initialState;
const usersReducer = (state = initialState, action: ActionTypes): initialStateType => {
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
//AC types
type ActionTypes = toggleFollowType | setUsersType | setCurrentPageType | setUsersTotalCountType | toggleIsFetchingType | toggleIsFollowingInProgressType
type toggleFollowType = {
	type: typeof TOGGLE_FOLLOW,
	id: number,
	followed: boolean
}
type setUsersType = {
	type: typeof SET_USERS,
	users: Array<UserType>
}
type setCurrentPageType = {
	type: typeof SET_CURRENT_PAGE,
	currentPage: number
}
type setUsersTotalCountType = {
	type: typeof SET_TOTAL_COUNT,
	totalCount: number
}
type toggleIsFetchingType = {
	type: typeof TOGGLE_IS_FETCHING,
	isFetching: boolean
}
type toggleIsFollowingInProgressType = {
	type: typeof TOGGLE_IS_FOLLOWING_IN_PROGRESS, followingInProgress: boolean, id: number
}
//AC
export const toggleFollow = (id: number, followed: boolean): toggleFollowType => ({ type: TOGGLE_FOLLOW, id, followed })
export const setUsers = (users: Array<UserType>): setUsersType => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage: number): setCurrentPageType => ({ type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCount = (totalCount: number): setUsersTotalCountType => ({ type: SET_TOTAL_COUNT, totalCount })
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingType => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleIsFollowingInProgress = (followingInProgress: boolean, id: number): toggleIsFollowingInProgressType => ({ type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, followingInProgress, id })
//thunk creators
type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;
export const getUsers = (currentPage: number, pageSize: number): ThunkType => async (dispatch) => {
	dispatch(toggleIsFetching(true));
	dispatch(setCurrentPage(currentPage))
	let data = await usersAPI.getUsers(currentPage, pageSize)
	dispatch(setUsers(data.items))
	dispatch(setUsersTotalCount(data.totalCount))
	dispatch(toggleIsFetching(false));
}
export const followUnfollowFlow = async (dispatch: DispatchType, id: number, followed: boolean, apiMethod: any) => {
	dispatch(toggleIsFollowingInProgress(true, id));
	let response = await apiMethod(id)
	if (response.resultCode === 0) {
		dispatch(toggleFollow(id, followed))
	}
	dispatch(toggleIsFollowingInProgress(false, id));
}
export const followPost = (id: number, followed: boolean): ThunkType => async (dispatch) => {
	followUnfollowFlow(dispatch, id, followed, usersAPI.followPost.bind(usersAPI))
}
export const followDelete = (id: number, followed: boolean): ThunkType => async (dispatch) => {
	followUnfollowFlow(dispatch, id, followed, usersAPI.followDelete.bind(usersAPI))
}
export default usersReducer;