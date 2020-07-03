import React, { Component } from "react";
import "./App.css";

class App extends Component {
	setQuote = () => {
		let quote = this.state.quote;
		quote = this.state.quoteList[0];
		this.setState({ quote });
	};

	constructor(props) {
		super(props);
		this.state = {
			quoteList: [
				{
					id: 1,
					content: "Hello List",
				},
				{
					id: 2,
					content: "Hello",
				},
				{
					id: 3,
					content: "Hello",
				},
			],
			quote: {},
		};
	}

	render() {
		return (
			<div className="App">
				{this.setState({ quote: this.quoteList[0] })}
				<h1>{this.state.quote.id}</h1>
				<h1>{this.state.quote.content}</h1>
				<button onClick={() => this.setQuote()}>Get Quote</button>
			</div>
		);
	}
}

export default App;
