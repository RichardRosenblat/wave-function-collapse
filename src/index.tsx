import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import Sudoku from "./pages/Sudoku";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<RecoilRoot>
			<RecoilNexus />
			<Sudoku />
		</RecoilRoot>
	</React.StrictMode>
);
