import { xOptions } from "../../types/xOptions";
import { yOptions } from "../../types/yOptions";
import SquaresArea from "../SquaresArea";
import Styles from "./Board.module.scss";
import CollapseMenu from "../CollapseMenu";
import { useBoard } from "../../hooks/useBoard";
import { Button } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import SendIcon from "@mui/icons-material/Send";
import { useState, useEffect } from 'react'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import StopIcon from '@mui/icons-material/Stop';

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
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isSolving])


	const handleSolveAllClick = () => {
		collapseAll()
	};
	const toggleSolving = () => {
		setIsSolving(prev => !prev)
	};


	return (
		<section className={Styles.container}>
			{board.map((rowOfAreas, rowOfAreasIndex) => {
				const yOption = ["top", "center", "bottom"][rowOfAreasIndex] as yOptions;
				const rowOfAreasKey = yOption[0];

				return (
					<div className={Styles.area_group} key={rowOfAreasKey}>
						{rowOfAreas.map((area, areaIndex) => {
							const xOption = ["left", "middle", "right"][areaIndex] as xOptions;
							const areaKey = rowOfAreasKey + xOption[0];
							return (
								<SquaresArea y={yOption} x={xOption} key={areaKey}>
									{area}
								</SquaresArea>
							);
						})}
					</div>
				);
			})}
			<div className={Styles["button-container"]}>
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
			</div>
			<Button
				variant="contained"
				onClick={handleSolveAllClick}
				sx={{ marginTop: "10px" }}
				endIcon={<DoneAllIcon />}
				color={"success"}
			>
				Solve All
			</Button>
			<CollapseMenu />

		</section>
	);
};

export default Board;
