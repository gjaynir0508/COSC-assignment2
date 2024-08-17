import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Login";

const App = () => {
	// Task 3: Use `useState` to manage the username state and pass it to the shop page
	const [name, setName] = useState();

	return (
		<div>
			<div className="main">
				<Router>
					{/* Task 1: Ensure that the header component is imported and rendered here */}
					<Header />
					<Routes>
						{/* Task 2: Implement routing to navigate between different pages */}
						<Route path="/" element={<Home />} />
						{/* Task 3: Pass the username state as a prop to the shop page */}
						<Route
							path="/shop"
							element={<Shop userName={name} />}
						/>
						{/* Task 3: Pass the setUser function to the login page */}
						<Route
							path="/login"
							element={<Login setUserName={setName} />}
						/>
					</Routes>
				</Router>
			</div>
		</div>
	);
};

export default App;
