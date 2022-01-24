import React from 'react'
import { useState } from 'react'

export default function Todo() {
	const [input, setInput] = useState();
	const [items, setItems] = useState([]);

	const AddHandler = (e) => {
		e.preventDefault();
		if (input) {
			setItems([...items, input])
			setInput('')
		}
	}
	const deleteItem = (dele) => {
		setItems(items.filter((item) => item !== dele))
	}

	return (
	<div className="todo" >
		<div className="todo-title">
					<h1>To Do</h1>
				</div>
			<form  className="form-todo"onSubmit={AddHandler}>
				<input
					type="text"
					className="input-todo"
					onChange={(e) => setInput(e.target.value)}
					value={input}
					placeholder="add ToDo"
				/>
				<button className="btn-addtodo" type="submit">Add</button>

			</form>
			<div className="display-div">
{/* adding map method for displaying and deleting items */}
				{items.map((dele, i) => {
					return (
						<div  className="dele-div">
						<div className="text-todo" key={i}>{dele}</div>
							<button className="trash-btn" onClick={() => deleteItem(dele)}>Delete</button>
						</div>
					)
				})}
			</div>
		</div>

	)
}
