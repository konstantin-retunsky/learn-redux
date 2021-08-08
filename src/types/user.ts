export enum UserActionTypes {
	FETCH_USERS = "FETCH_USERS",
	FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
	FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

export interface UserState {
	users: any[]
	loading: boolean
	error: null | string
}

interface FetchUserAction {
	type: UserActionTypes.FETCH_USERS
}

interface FetchUserSuccessAction {
	type: UserActionTypes.FETCH_USERS_SUCCESS
	payload: any[]
}

interface FetchUserErrorAction {
	type: UserActionTypes.FETCH_USERS_ERROR
	payload: string
}

export type UserActions = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction

export interface FetchUserResponse {
	id: number
	name: string
	username: string
	email: string
	address: {
		street: string,
		suite: string,
		city: string,
		zipcode: string,
		geo: {
			lat: string,
			lng: string
		}
	},
	phone: string,
	website: string,
	company: {
		name: string,
		catchPhrase: string,
		bs: string
	}
}