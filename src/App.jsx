import React from "react";
import Header from "./components/Header/index";
import "./App.css";

export default props => {
	return (
		<div className="App">
			<Header
				brandLabel="Example"
				imgalt="logo"
				img="https://cdn.worldvectorlogo.com/logos/react.svg"
			>
				<a href="#">Home</a>
				<a href="#">About</a>
				<a href="#">Contact</a>
			</Header>
		</div>
	);
};
