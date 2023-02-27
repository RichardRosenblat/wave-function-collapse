import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import Sudoku from "./pages/Sudoku";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<RecoilRoot>
			<Sudoku />
		</RecoilRoot>
	</React.StrictMode>
);
