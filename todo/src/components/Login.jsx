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
    <div className="login-container">
      <div className="login">
        <form className="login-form">
          <h1 className="login-title">Log in</h1>
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
          <Link className="forgot-text" to="/forgotpassword">
            Forgot password?
          </Link>

          <button className="btn-login" type="submit" onClick={onSubmit}>
            Log in
          </button>
          <div className="signup-link">
            <p>
              Don't have an account? <Link to="/signup"> Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
