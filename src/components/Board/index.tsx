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
import Styles from './Board.module.scss'
import { useCollapseMenu } from "../../hooks/useCollapseMenu";

const Board = () => {
	const { board, restoreAll, collapseAll, startCollapsing, stopCollapsing } = useBoard();

	const [isSolving, setIsSolving] = useState(false)
	const { selectedCell } = useCollapseMenu();


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


	const toggleSolving = () => {
		setIsSolving(prev => !prev)
	};
	const handleSolveAllClick = () => {
		collapseAll()
	};
	const handleToggleSolvingClick = () => {
		toggleSolving()
	};
	const handleResetClick = () => {
		if (isSolving) {
			toggleSolving()
		}
		restoreAll()
	}


	return (
		<section >
			<div className={Styles.grid}>
				{board.map((rowOfAreas, rowOfAreasIndex) => {
					const yOption = ["top", "center", "bottom"][rowOfAreasIndex] as yOptions;
					const rowOfAreasKey = yOption[0];

					return (
						rowOfAreas.map((area, areaIndex) => {
							const xOption = ["left", "middle", "right"][areaIndex] as xOptions;
							const areaKey = rowOfAreasKey + xOption[0];
							return (
								<SquaresArea y={yOption} x={xOption} key={areaKey}>
									{area}
								</SquaresArea>
							);
						})
					);
				})}
			</div>

			<div className={Styles.controls} >
				<Button 
					variant="contained"
					disabled={!!selectedCell}
					onClick={handleResetClick} 
					startIcon={<RestartAltIcon />}
				>
					Reset
				</Button>

				<Button
					variant="contained"
					onClick={handleToggleSolvingClick}
					disabled={!!selectedCell}
					sx={{ marginLeft: "10px" }}
					endIcon={isSolving ? <StopIcon /> : <SendIcon />}
					color={isSolving ? 'error' : "primary"}
				>
					{!isSolving ? 'Start' : 'Stop'} solving
				</Button>
				<Button
					variant="contained"
					onClick={handleSolveAllClick}
					disabled={!!selectedCell}
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
