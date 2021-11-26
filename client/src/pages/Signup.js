import React from 'react'

export default function Signup() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const onChange = (e) => {
		setEmail(e.target.value);
		setName(e.target.value);
	}
	const onSubmit = (event) =>{
		event.preventDefault();
		if (email === "" || password.lenght < 8) {
			return;
		}
		setName("");
	}
	return (
		<form className="form-Signup">
			<input
			className="input-name-signup"
			type="text"
			placeholder="Enter your name"
			value={name}
			onChange={onChange}
			/>
			<input
			className="input-email-signup"
			placeholder="Enter your email"
			value={email}
			type="email"
			onChange={onChange}
			/>
			<input
			className="input-password-signup"
			placeholder="password"
			type="password"
			/>
			<input
			className="input-passwor-signup-confirm"
			placeholder="confirm a password"
			type="password"
			/>
			<button type="submit" onClick={onSubmit}> Sign Up</button>
		</form>
	)
}
