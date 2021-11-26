import React from 'react'

export default function Login() {
	const [email, setEmail] = useState("")
	const onChange = (e) => {
		setEmail(e.target.value)
	}
	const onSubmit = (event) =>{
		event.preventDefault();
		if (email === 0 || password.lenght < 8) {
			return;
		}
	}
	return (
		<form className="login-form">
			<input
			className="input-email-login"
			type="email"
			placeholder="Enter your email"
			value={email}
			onChange={onChange}
			/>
			<input
			className="input-password-login"
			type="password"
			placeholder="Enter your password"
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
