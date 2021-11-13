import React from 'react'
import { useForm } from "react-hook-form";


export default function LoginPage() {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
  	const onSubmit = data => console.log(data);


	return (

		<form className="login-page" onSubmit={handleSubmit(onSubmit)}>
			<div className="login-div">
			<input type="text" className="input-name" placeholder="Enter your Name" {...register("name")} />
			<input className="input-login-email" type="email" placeholder="Enter your email address" {...register("email", { required: true })}   />
			<input className="input-login-password" type="password" placeholder="Enter your password"{...register("password", { required: true })}  />
			<button type="submit" className="btn-signin" > Sign in </button>
			</div>
		</form>

	)
}
