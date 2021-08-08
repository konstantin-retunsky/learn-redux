import React, { ReactElement, useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { FetchUserResponse } from '../types/user'


export default function UserList(): ReactElement {

	const { users, error, loading } = useTypedSelector(state => state.user)
	const { fetchUsers } = useActions()


	useEffect(() => {
		fetchUsers()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (loading) {
		return <h1>Loading...</h1>
	}

	if (error) {
		return <h1>{error}</h1>
	}

	return (
		<ul style={{ listStyle: "none" }}>
			{
				users.map((user:FetchUserResponse) => <li key={user.id}>{user.name}</li>)
			}
		</ul>
	)
}

