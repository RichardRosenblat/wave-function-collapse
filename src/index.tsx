import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import Sudoku from "./pages/Sudoku";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<Sudoku />
	</React.StrictMode>
);
