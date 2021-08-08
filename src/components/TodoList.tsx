import React, { ReactElement, useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { FetchTodoResponse } from '../types/todo'


export default function TodoList(): ReactElement {
	const {
		error,
		limit,
		loading,
		page,
		todos
	} = useTypedSelector(state => state.todo)

	const { fetchTodos } = useActions()

	useEffect(() => {
		fetchTodos(page, limit)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page])

	if (loading) {
		return <h1>Loading...</h1>
	}

	if (error) {
		return <h1>error: {error}</h1>
	}

	return (
		<ul style={{ listStyle: "none" }}>
			{
				todos.map((todo: FetchTodoResponse) =>
					<li
						key={todo.id}
						style={{
							border: "1px solid grey",
							padding: "10px"
						}}
					>
						{todo.title}
					</li>
				)
			}
		</ul>
	)
}
