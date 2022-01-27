import React from 'react'
import { Link } from 'react-router-dom';

export default function Login() {
	const [email, setEmail] = React.useState("")
	const [password, setPassword] =React.useState("")
	const onChange = (e) => {
		setEmail(e.target.value);
		setPassword(e.target.value)
	}
	const onSubmit = (event) =>{
		event.preventDefault();
		if (email === 0 || password.lenght < 8) {
			return;
		}
	}
	return (
		<div className="login">
		<form className="login-form">
			<input
			className="input-email-login"
			name="email"
			type="email"
			placeholder="Enter your email"
			value={email}
			onChange={onChange}
			/>
			<input
			className="input-password-login"
			type="password"
			name="password"
			placeholder="Enter your password"
			onChange={onChange}
			value={password}
			/>
			<button
			className=""
			type="submit"
			onClick={onSubmit}
			>
				<Link to="/todolist">log in</Link>

			</button>
			<div>
				<p>Don't have an account? <Link to="/signup"> Sign Up</Link></p>
			</div>
		</form>
		</div>
	)
}
