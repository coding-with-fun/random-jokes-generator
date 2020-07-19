import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [num, setNum] = useState([1, 2, 3]);
	const [currentNum, setCurrentNum] = useState(0);

	useEffect(() => {
		setCurrentNum(num[0]);
	}, [num]);

	const onNext = () => {
		const index = num.indexOf(currentNum);
		if (index === num.length - 1) {
			setCurrentNum(num[0]);
		} else {
			setCurrentNum(num[index + 1]);
		}
	};

	const onPrev = () => {
		const index = num.indexOf(currentNum);
		if (index === 0) {
			setCurrentNum(num[num.length - 1]);
		} else {
			setCurrentNum(num[index - 1]);
		}
	};

	const addNewNumber = () => {
		const lastNum = num[num.length - 1];
		setNum([...num, lastNum + 1]);
		alert(`Succesfully added ${lastNum + 1}`);
	};

	return (
		<div className="App">
			<div>
				<button onClick={onPrev}>Prev</button>
				{currentNum}
				<button onClick={onNext}>Next</button>
			</div>
			<button onClick={addNewNumber}>Add new number</button>
		</div>
	);
}

export default App;
