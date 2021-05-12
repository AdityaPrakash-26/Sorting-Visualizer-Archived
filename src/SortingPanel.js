import React, { Component } from "react";
import { getMergeSortAnimations } from "./Algorithms/MergeSort";
import { getBubbleSortAnimations } from "./Algorithms/BubbleSort";
import { getSelectionSortAnimations } from "./Algorithms/SelectionSort";
import { getInsertionSortAnimations } from "./Algorithms/InsertionSort";
import { getShellSortAnimations } from "./Algorithms/ShellSort";
import { getQuickSortFirstAnimations } from "./Algorithms/QuickSortFirst";
import { getQuickSortLastAnimations } from "./Algorithms/QuickSortLast";

class SortingPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sortingAlgo: "",
		};
		this.handleSort = this.handleSort.bind(this);
	}
	handleSort(e) {
		const sortingAlgo = e.target.value;
		this.setState({
			sortingAlgo: sortingAlgo,
		});
		const { onCompareColor, initialColor, speed, OriginalArray } =
			this.props;
		const arrayBars = document.getElementsByClassName("array-bar");
		if (sortingAlgo === "quickSortFirst") {
			const animatingArray = getQuickSortFirstAnimations(OriginalArray);
			for (let i = 0; i < animatingArray.length; i++) {
				const colorChange = i % 4 <= 1;
				if (colorChange) {
					const [barOneIdx, barTwoIdx] = animatingArray[i];
					const barOneStyle = arrayBars[barOneIdx].style;
					const barTwoStyle = arrayBars[barTwoIdx].style;
					const color = i % 4 === 0 ? onCompareColor : initialColor;
					setTimeout(() => {
						barOneStyle.backgroundColor = color;
						barTwoStyle.backgroundColor = color;
					}, i * speed);
				} else {
					setTimeout(() => {
						const [barOneIdx, newHeight] = animatingArray[i];
						const barOneStyle = arrayBars[barOneIdx].style;
						barOneStyle.height = `${newHeight}px`;
					}, i * speed);
				}
			}
		} else if (sortingAlgo === "quickSortLast") {
			const animatingArray = getQuickSortLastAnimations(OriginalArray);
			for (let i = 0; i < animatingArray.length; i++) {
				const colorChange = i % 4 <= 1;
				if (colorChange) {
					const [barOneIdx, barTwoIdx] = animatingArray[i];
					const barOneStyle = arrayBars[barOneIdx].style;
					const barTwoStyle = arrayBars[barTwoIdx].style;
					const color = i % 4 === 0 ? onCompareColor : initialColor;
					setTimeout(() => {
						barOneStyle.backgroundColor = color;
						barTwoStyle.backgroundColor = color;
					}, i * speed);
				} else {
					setTimeout(() => {
						const [barOneIdx, newHeight] = animatingArray[i];
						const barOneStyle = arrayBars[barOneIdx].style;
						barOneStyle.height = `${newHeight}px`;
					}, i * speed);
				}
			}
		} else if (sortingAlgo === "shellSort") {
			const animatingArray = getShellSortAnimations(OriginalArray);
			for (let i = 0; i < animatingArray.length; i++) {
				const colorChange = i % 4 <= 1;
				if (colorChange) {
					const [barOneIdx, barTwoIdx] = animatingArray[i];
					const barOneStyle = arrayBars[barOneIdx].style;
					const barTwoStyle = arrayBars[barTwoIdx].style;
					const color = i % 4 === 0 ? onCompareColor : initialColor;
					setTimeout(() => {
						barOneStyle.backgroundColor = color;
						barTwoStyle.backgroundColor = color;
					}, i * speed);
				} else {
					setTimeout(() => {
						const [barOneIdx, newHeight] = animatingArray[i];
						const barOneStyle = arrayBars[barOneIdx].style;
						barOneStyle.height = `${newHeight}px`;
					}, i * speed);
				}
			}
		} else if (sortingAlgo === "insertionSort") {
			const animatingArray = getInsertionSortAnimations(OriginalArray);
			for (let i = 0; i < animatingArray.length; i++) {
				const colorChange = i % 4 <= 1;
				if (colorChange) {
					const [barOneIdx, barTwoIdx] = animatingArray[i];
					const barOneStyle = arrayBars[barOneIdx].style;
					const barTwoStyle = arrayBars[barTwoIdx].style;
					const color = i % 4 === 0 ? onCompareColor : initialColor;
					setTimeout(() => {
						barOneStyle.backgroundColor = color;
						barTwoStyle.backgroundColor = color;
					}, i * speed);
				} else {
					setTimeout(() => {
						const [barOneIdx, newHeight] = animatingArray[i];
						const barOneStyle = arrayBars[barOneIdx].style;
						barOneStyle.height = `${newHeight}px`;
					}, i * speed);
				}
			}
		} else if (sortingAlgo === "selectionSort") {
			const animatingArray = getSelectionSortAnimations(OriginalArray);
			for (let i = 0; i < animatingArray.length; i++) {
				const colorChange = i % 4 <= 1;
				if (colorChange) {
					const [barOneIdx, barTwoIdx] = animatingArray[i];
					const barOneStyle = arrayBars[barOneIdx].style;
					const barTwoStyle = arrayBars[barTwoIdx].style;
					const color = i % 4 === 0 ? onCompareColor : initialColor;
					setTimeout(() => {
						barOneStyle.backgroundColor = color;
						barTwoStyle.backgroundColor = color;
					}, i * speed);
				} else {
					setTimeout(() => {
						const [barOneIdx, newHeight] = animatingArray[i];
						const barOneStyle = arrayBars[barOneIdx].style;
						barOneStyle.height = `${newHeight}px`;
					}, i * speed);
				}
			}
		} else if (sortingAlgo === "bubbleSort") {
			const animatingArray = getBubbleSortAnimations(OriginalArray);
			for (let i = 0; i < animatingArray.length; i++) {
				const colorChange = i % 4 <= 1;
				if (colorChange) {
					const [barOneIdx, barTwoIdx] = animatingArray[i];
					const barOneStyle = arrayBars[barOneIdx].style;
					const barTwoStyle = arrayBars[barTwoIdx].style;
					const color = i % 4 === 0 ? onCompareColor : initialColor;
					setTimeout(() => {
						barOneStyle.backgroundColor = color;
						barTwoStyle.backgroundColor = color;
					}, i * speed);
				} else {
					setTimeout(() => {
						const [barOneIdx, newHeight] = animatingArray[i];
						const barOneStyle = arrayBars[barOneIdx].style;
						barOneStyle.height = `${newHeight}px`;
					}, i * speed);
				}
			}
		} else {
			const animatingArray = getMergeSortAnimations(OriginalArray);
			for (let i = 0; i < animatingArray.length; i++) {
				const colorChange = i % 3 !== 2;
				if (colorChange) {
					const [barOneIdx, barTwoIdx] = animatingArray[i];
					const barOneStyle = arrayBars[barOneIdx].style;
					const barTwoStyle = arrayBars[barTwoIdx].style;
					const color = i % 3 === 0 ? onCompareColor : initialColor;
					setTimeout(() => {
						barOneStyle.backgroundColor = color;
						barTwoStyle.backgroundColor = color;
					}, i * speed);
				} else {
					setTimeout(() => {
						const [barOneIdx, newHeight] = animatingArray[i];
						const barOneStyle = arrayBars[barOneIdx].style;
						barOneStyle.height = `${newHeight}px`;
					}, i * speed);
				}
			}
		}
	}

	//CSS stuff
	render() {
		return (
			<div className="container mb-3">
				<div className="row shadow-sm justify-content-center pb-2">
					<div className="col-md-3">
						<div className="row justify-content-center">
							<label>Array Size</label>
							<input
								className="custom-range"
								name="numInArray"
								type="range"
								min="5"
								max="150"
								value={this.props.numInArray}
								onChange={(e) => this.props.handleSetting(e)}
							/>
						</div>
						<div className="row justify-content-center">
							<label>Animation Speed</label>
							<input
								className="custom-range"
								name="speed"
								type="range"
								min="1"
								max="100"
								value={this.props.speed}
								onChange={(e) => this.props.handleSetting(e)}
							/>
						</div>
						<div className="row justify-content-center">
							<button
								type="button"
								className="btn btn-outline-primary btn-lg"
								onClick={this.props.handleReset}
							>
								Generate New Array
							</button>
						</div>
					</div>
					<div className="col-auto">
						<div className="row align-items-start ml-3 my-4">
							<div className="btn-group-md btn-group-vertical">
								<button
									type="button"
									className="btn btn-outline-primary "
									value="mergeSort"
									onClick={(e) => this.handleSort(e)}
								>
									Merge Sort
								</button>
								<button
									type="button"
									className="btn btn-outline-primary"
									value="selectionSort"
									onClick={(e) => this.handleSort(e)}
								>
									Selection Sort
								</button>
							</div>
							<div
								className="btn-groupd-md btn-group-vertical"
								role="group"
							>
								<button
									type="button"
									className="btn btn-outline-primary"
									value="bubbleSort"
									onClick={(e) => this.handleSort(e)}
								>
									Bubble Sort
								</button>
								<button
									type="button"
									className="btn btn-outline-primary"
									value="combSort"
									onClick={(e) => this.handleSort(e)}
								>
									Comb Sort
								</button>
							</div>
							<div
								className="btn-groupd-md btn-group-vertical"
								role="group"
							>
								<button
									type="button"
									className="btn btn-outline-primary"
									value="insertionSort"
									onClick={(e) => this.handleSort(e)}
								>
									Insertion Sort
								</button>
								<button
									type="button"
									className="btn btn-outline-primary"
									value="shellSort"
									onClick={(e) => this.handleSort(e)}
								>
									Shell Sort
								</button>
							</div>
							<div
								className="btn-groupd-md btn-group-vertical"
								role="group"
							>
								<button
									type="button"
									className="btn btn-outline-primary"
									value="quickSortFirst"
									onClick={(e) => this.handleSort(e)}
								>
									Quick Sort(FirstIdx)
								</button>
								<button
									type="button"
									className="btn btn-outline-primary"
									value="quickSortLast"
									onClick={(e) => this.handleSort(e)}
								>
									Quick Sort(LastIdx)
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default SortingPanel;
