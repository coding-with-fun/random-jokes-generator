import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const [joke, setJoke] = useState("Loading...");
	const [fname, setFname] = useState("John");
	const [lname, setLname] = useState("Doe");

	const url = `https://api.icndb.com/jokes/random?firstName=${fname}&lastName=${lname}`;

	const newJoke = async () => {
		const {
			data: {
				value: { joke },
			},
		} = await axios.get(url);
		console.log(joke);
		setJoke(joke);
	};

	useEffect(() => {
		newJoke();
		// eslint-disable-next-line
	}, []);

	return (
		<div className="App">
			<h2 className="AppItems">Random Jokes Generator</h2>
			<div className="AppItems">
				<input
					type="text"
					id="fname"
					placeholder={fname}
					onChange={(e) => setFname(e.target.value)}
					className="AppItems"
				/>
				<input
					type="text"
					id="lname"
					placeholder={lname}
					onChange={(e) => setLname(e.target.value)}
					className="AppItems"
				/>
			</div>
			<button className="btn btn-primary AppItems" onClick={() => newJoke()}>
				Get another joke
			</button>
			<h4 className="AppItems">{joke}</h4>
		</div>
	);
}

export default App;
