import React from 'react'
import {useState} from 'react'

export default function Todo() {
	const [todo, setTodo] = useState("")
	const onChange = (e) => {
		setTodo(e.target.value)
	}
	const onSubmit = (e) => {
		e.preventDefault();
	if (todo.length === 0) {
		return;
	}
	setTodo("");
	}
	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
				type="text"
				placeholder="add Todo"
				value={todo}
				onChange={onChange}
				required
				/>
			</form>
			<button type="submit" onClick={onSubmit}>Add</button>
		</div>
	)
}
