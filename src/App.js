import React, { useState } from "react";
import "./App.css";

function App() {
	const [num, setNum] = useState([
		{
			num: 1,
			val: 1,
		},
		{
			num: 2,
			val: 2,
		},
		{
			num: 3,
			val: 3,
		},
	]);
	const [currentNum, setCurrentNum] = useState(num[0]);

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
		setNum([
			...num,
			{
				num: lastNum.num + 1,
				val: lastNum.val + 1,
			},
		]);
	};

	return (
		<div className="App">
			<div>
				<button onClick={onPrev}>Prev</button>
				{currentNum.num}
				{currentNum.val}
				<button onClick={onNext}>Next</button>
			</div>
			<button onClick={addNewNumber}>Add new number</button>
		</div>
	);
}

export default App;
