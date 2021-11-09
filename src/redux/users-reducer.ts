import { UserType, FilterType } from './../types/types';
import { usersAPI } from "../API/users-api"
import { InferActionTypes, BaseThunkType } from './redux-store';
import { resultCode } from '../API/api';

let initialState = {
	users: [] as Array<UserType>,
	pageSize: 10 as number,
	totalUsersCount: 0 as number,
	currentPage: 1 as number,
	isFetching: false as boolean,
	followingInProgress: [] as Array<number>, //array of user ID's
	filter: { name: '' as string, friend: null as null | boolean }
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
		case 'SET_FILTER': {
			return { ...state, filter: action.payload }
		}
		default: return state
	}
}

//actions
export const actions = {
	toggleFollow: (id: number, followed: boolean) => ({ type: 'TOGGLE_FOLLOW', id, followed } as const),
	setUsers: (users: Array<UserType>) => ({ type: 'SET_USERS', users } as const),
	setCurrentPage: (currentPage: number) => ({ type: 'SET_CURRENT_PAGE', currentPage } as const),
	setUsersTotalCount: (totalCount: number) => ({ type: 'SET_TOTAL_COUNT', totalCount } as const),
	toggleIsFetching: (isFetching: boolean) => ({ type: 'TOGGLE_IS_FETCHING', isFetching } as const),
	toggleIsFollowingInProgress: (followingInProgress: boolean, id: number) =>
		({ type: 'TOGGLE_IS_FOLLOWING_IN_PROGRESS', followingInProgress, id } as const),
	setFilter: (filter: FilterType) => ({ type: 'SET_FILTER', payload: filter } as const)
}
type ActionTypes = InferActionTypes<typeof actions>
//thunks
type ThunkType = BaseThunkType<ActionTypes>
export const getUsers = (currentPage: number, pageSize: number, filter: FilterType): ThunkType => async (dispatch) => {
	dispatch(actions.toggleIsFetching(true));
	dispatch(actions.setCurrentPage(currentPage))
	dispatch(actions.setFilter(filter))
	let data = await usersAPI.getUsers(currentPage, pageSize, filter.name, filter.friend)
	dispatch(actions.setUsers(data.items))
	dispatch(actions.setUsersTotalCount(data.totalCount))
	dispatch(actions.toggleIsFetching(false));
}
export const followPost = (id: number, followed: boolean): ThunkType => async (dispatch) => {
	dispatch(actions.toggleIsFollowingInProgress(true, id));
	let res = await usersAPI.followPost(id)
	if (res.resultCode === resultCode.Success) {
		dispatch(actions.toggleFollow(id, followed))
	}
	dispatch(actions.toggleIsFollowingInProgress(false, id));
}
export const followDelete = (id: number, followed: boolean): ThunkType => async (dispatch) => {
	dispatch(actions.toggleIsFollowingInProgress(true, id));
	let res = await usersAPI.followDelete(id)
	if (res.resultCode === resultCode.Success) {
		dispatch(actions.toggleFollow(id, followed))
	}
	dispatch(actions.toggleIsFollowingInProgress(false, id));
}
export default usersReducer;