import React from 'react'

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
		<form className="login">
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
			type="submit"
			onClick={onSubmit}
			>
				Log in
			</button>
		</form>
	)
}
