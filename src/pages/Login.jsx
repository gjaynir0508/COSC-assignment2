import React, { useState } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";

const Login = ({ setUserName }) => {
	// Task 3: Create a state variable here to store the username input by the user
	const [name, setName] = useState("");
	const navigate = useNavigate();

	const handleSubmit = () => {
		// Task 3: Use the function passed as a prop to update the username in the parent component
		setUserName(name);
		navigate("/shop");
	};

	return (
		<div className="login">
			<div className="island">
				<h1>Login</h1>
				<input type="email" placeholder="Enter your email" />
				<input
					type="text"
					placeholder="Enter your name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<button onClick={handleSubmit}>Login</button>
			</div>
		</div>
	);
};

export default Login;
