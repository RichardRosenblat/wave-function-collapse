import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import Sudoku from "./pages/Sudoku";
import { RecoilRoot } from "recoil";
import { Typography } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<RecoilRoot>
			<Typography variant="h1" style={{
				textAlign: "center",
				fontSize: "2rem",
				margin: "1rem",
				fontWeight: "bold",
			}} >
				Wave Function Collapse
			</Typography>

			<Sudoku />
		</RecoilRoot>
	</React.StrictMode>
);
