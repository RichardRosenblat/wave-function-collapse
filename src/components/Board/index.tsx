import { xOptions } from "../../types/xOptions";
import { yOptions } from "../../types/yOptions";
import SquaresArea from "../SquaresArea";
import CollapseMenu from "../CollapseMenu";
import { useBoard } from "../../hooks/useBoard";
import { Button } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import SendIcon from "@mui/icons-material/Send";
import { useState, useEffect } from 'react'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import StopIcon from '@mui/icons-material/Stop';
import React from "react";
import Styles from './Board.module.scss'

const Board = () => {
	const { board, restoreAll, collapseAll, startCollapsing, stopCollapsing } = useBoard();

	const [isSolving, setIsSolving] = useState(false)

	useEffect(() => {
		if (isSolving) {
			startCollapsing(() => {
				alert('No more cells left to collapse');
				toggleSolving()
			})
		} else {
			stopCollapsing()
		}
	}, [isSolving, startCollapsing, stopCollapsing])


	const handleSolveAllClick = () => {
		collapseAll()
	};
	const toggleSolving = () => {
		setIsSolving(prev => !prev)
	};


	return (
		<section >
			<div className={Styles.grid}>
				{board.map((rowOfAreas, rowOfAreasIndex) => {
					const yOption = ["top", "center", "bottom"][rowOfAreasIndex] as yOptions;
					const rowOfAreasKey = yOption[0];

					return (
						<React.Fragment key={rowOfAreasKey}>
							{rowOfAreas.map((area, areaIndex) => {
								const xOption = ["left", "middle", "right"][areaIndex] as xOptions;
								const areaKey = rowOfAreasKey + xOption[0];
								return (
									<div className={Styles[`grid_${rowOfAreasIndex}_${areaIndex}`]}>
										<SquaresArea y={yOption} x={xOption} key={areaKey}>
											{area}
										</SquaresArea>
									</div>
								);
							})}
						</React.Fragment>
					);
				})}
			</div>

			<div >
				<Button variant="contained" onClick={restoreAll} startIcon={<RestartAltIcon />}>
					Reset
				</Button>

				<Button
					variant="contained"
					onClick={toggleSolving}
					sx={{ marginLeft: "10px" }}
					endIcon={isSolving ? <StopIcon /> : <SendIcon />}
					color={isSolving ? 'error' : "primary"}
				>
					Start solving
				</Button>
				<Button
					variant="contained"
					onClick={handleSolveAllClick}
					sx={{ marginLeft: "10px" }}
					endIcon={<DoneAllIcon />}
					color={"success"}
				>
					Solve All
				</Button>
			</div>
			<CollapseMenu />

		</section>
	);
};

export default Board;
