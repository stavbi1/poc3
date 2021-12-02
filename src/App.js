import React, { useEffect } from "react";
import { FixedSizeGrid as Grid } from "react-window";
import { Cell, COLUMN_WIDTH, GUTTER_SIZE, ROW_HEIGHT } from "./cell/Cell";
import './App.css';
import { innerElementType } from "./cell/InnerElement";
import WorkerBuilder from "./web-worker/worker-builder";
import fiboWorker from "./web-worker/fibo.worker";

const ROWS = 500;
const COLUMNS = 500;

const instance = new WorkerBuilder(fiboWorker);

function App() {
	useEffect(() => {
		instance.onmessage = (message) => {
			if (message) {
				console.log("Message from worker", message.data);
			}
		};
		return function cleanup() {
			instance.removeEventListener(onmessage, null);
		};
	}, []);

	function renderNonGrid() {
		let table = [];
		let row = [];

		for (let i = 0; i < ROWS; i++) {
			for (let j = 0; j < COLUMNS; j++) {
				row.push(<td style={{border: "1px solid black"}}><Cell rowIndex={i} columnIndex={j} style={{left: 3, height: 3, top: 3, width: 3}}/></td>);
			}
			table.push(<tr>{row}</tr>);
			row = [];
		}
		
		return <table style={{border: "1px solid black"}}>{table}</table>;
	}

	return (
		<div className="App">
			<Grid
				className="Grid"
				columnCount={COLUMNS}
				columnWidth={COLUMN_WIDTH + GUTTER_SIZE}
				height={150}
				innerElementType={innerElementType}
				rowCount={ROWS}
				rowHeight={ROW_HEIGHT + GUTTER_SIZE}
				width={300}
			>
				{Cell}
			</Grid>
			{/* {
				renderNonGrid()
			} */}
			<button
				onClick={() => {
				instance.postMessage(5);
				}}
          	>
			  	Send Message
			</button>
		</div>
	);
}

export default App;
