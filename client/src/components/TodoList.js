import React from 'react'
import { useForm } from "react-hook-form";

export default function TodoList() {
	
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const onSubmit = data => console.log(data);
	return (
		<div className="todo-list" onSubmit={handleSubmit(onsubmit)}>
			<h1 className="todo-h1"> Todo List </h1>
			<div className="todo-list-div">
			<input type="text" className="todo-input" placeholder="Add ToDo"  {...register("newtodo", { required: true })}/>
			<button className="btn-todo-add" type="submit"> ➕ </button>
			</div>
		</div>
	)
}
