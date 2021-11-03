import { UserType } from './../types/types';
import { usersAPI } from "../API/api"
import { Dispatch } from 'redux';
import { AppStateType, InferActionTypes } from './redux-store';
import { ThunkAction } from 'redux-thunk';

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
		case 'TOGGLE_FOLLOW':
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.id) {
						return { ...u, followed: !action.followed }
					}
					return u
				})
			}
		case 'SET_USERS': {
			return { ...state, users: action.users }
		}
		case 'SET_CURRENT_PAGE': {
			return { ...state, currentPage: action.currentPage }
		}
		case 'SET_TOTAL_COUNT': {
			return { ...state, totalUsersCount: action.totalCount }
		}
		case 'TOGGLE_IS_FETCHING': {
			return { ...state, isFetching: action.isFetching }
		}
		case 'TOGGLE_IS_FOLLOWING_IN_PROGRESS': {
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
type ActionTypes = InferActionTypes<typeof actions>
//AC
export const actions = {
	toggleFollow: (id: number, followed: boolean) => ({ type: 'TOGGLE_FOLLOW', id, followed } as const),
	setUsers: (users: Array<UserType>) => ({ type: 'SET_USERS', users } as const),
	setCurrentPage: (currentPage: number) => ({ type: 'SET_CURRENT_PAGE', currentPage } as const),
	setUsersTotalCount: (totalCount: number) => ({ type: 'SET_TOTAL_COUNT', totalCount } as const),
	toggleIsFetching: (isFetching: boolean) => ({ type: 'TOGGLE_IS_FETCHING', isFetching } as const),
	toggleIsFollowingInProgress: (followingInProgress: boolean, id: number) => ({ type: 'TOGGLE_IS_FOLLOWING_IN_PROGRESS', followingInProgress, id } as const)
}
//thunk creators
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;
export const getUsers = (currentPage: number, pageSize: number): ThunkType => async (dispatch) => {
	dispatch(actions.toggleIsFetching(true));
	dispatch(actions.setCurrentPage(currentPage))
	let data = await usersAPI.getUsers(currentPage, pageSize)
	dispatch(actions.setUsers(data.items))
	dispatch(actions.setUsersTotalCount(data.totalCount))
	dispatch(actions.toggleIsFetching(false));
}

export const followPost = (id: number, followed: boolean): ThunkType => async (dispatch) => {
	dispatch(actions.toggleIsFollowingInProgress(true, id));
	let response = await usersAPI.followPost(id)
	if (response.resultCode === 0) {
		dispatch(actions.toggleFollow(id, followed))
	}
	dispatch(actions.toggleIsFollowingInProgress(false, id));
}
export const followDelete = (id: number, followed: boolean): ThunkType => async (dispatch) => {
	dispatch(actions.toggleIsFollowingInProgress(true, id));
	let response = await usersAPI.followDelete(id)
	if (response.resultCode === 0) {
		dispatch(actions.toggleFollow(id, followed))
	}
	dispatch(actions.toggleIsFollowingInProgress(false, id));
}
export default usersReducer;