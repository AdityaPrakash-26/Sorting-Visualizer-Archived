import React, { Component } from "react";
import SortingPanel from "./SortingPanel";
import SortingShow from "./SortingShow";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			OriginalArray: [],
			numInArray: 75,
			speed: 1,
			initialColor: "black",
			onCompareColor: "red",
			currentAlgo: "",
		};
		this.handleReset = this.handleReset.bind(this);
		this.handleSetting = this.handleSetting.bind(this);
	}
	componentDidMount() {
		this.handleReset();
	}
	handleSetting(e) {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({
			[name]: value,
		});
		this.handleReset();
	}
	handleReset() {
		const newArray = [];
		for (let i = 0; i < this.state.numInArray; i++) {
			newArray.push(randomIntFromInterval(5, 400));
		}
		this.setState({
			OriginalArray: newArray,
		});
	}
	render() {
		return (
			<div className="container">
				{/* navbar here */}
				<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
					<a className="navbar-brand" href="/">
						Sorting Algorithm Visualization
					</a>
					<div className="navbar-nav ml-auto">
						<div className="nav-item ">
							<a
								className="nav-link "
								href="https://github.com/AdityaPrakash-26/sorting-visualizer"
							>
								Source Code
							</a>
						</div>
					</div>
				</nav>
				{/* navbar ends */}
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<SortingShow
					OriginalArray={this.state.OriginalArray}
					initialColor={this.state.initialColor}
				/>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<SortingPanel
					handleReset={this.handleReset}
					handleSetting={this.handleSetting}
					numInArray={this.state.numInArray}
					onCompareColor={this.state.onCompareColor}
					initialColor={this.state.initialColor}
					speed={this.state.speed}
					OriginalArray={this.state.OriginalArray}
				/>
			</div>
		);
	}
}

// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
	// min and max included
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export default App;
