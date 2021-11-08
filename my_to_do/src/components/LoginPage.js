import React from 'react'
import {link} from 'react-dom'

export default function LoginPage() {
	function handleClick(event) {
		event.preventDefault();
		console.log('click');
	}
	return (
		<div className="login-page">
			<div className="login-div">
			<input className="input-login-email" type="email" placeholder="Enter your email address" required />
			<input className="input-login-password" type="password" placeholder="Enter your password" required />
			<button type="submit" className="btn-signin" onClick={handleClick}> Sign in </button>
			</div>
		</div>
	)
}
