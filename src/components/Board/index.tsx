import { xOptions } from "../../types/xOptions";
import { yOptions } from "../../types/yOptions";
import SquaresArea from "../SquaresArea";
import Styles from "./Board.module.scss";
import CollapseMenu from "../CollapseMenu";
import { useBoard } from "../../hooks/useBoard";
import { Button } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import SendIcon from "@mui/icons-material/Send";
import StopIcon from '@mui/icons-material/Stop';
import { useEffect, useState } from "react";

const Board = () => {
	const { board, restoreAll, collapseNext } = useBoard();
	const [isSolving, setIsSolving] = useState(false);
	const [intervalId, setIntervalId] = useState<NodeJS.Timer | undefined>(undefined);

	const handleSolvingClick = () => {
		setIsSolving(prevState => !prevState);
	};
	// TODO THERES SOMETHING WEIRD GOING ON HELP
	useEffect(() => {
		if (isSolving) {
			// collapseNext();
			// handleSolvingClick()
			const id = setInterval(() => {
				const hasCollapsedACell = collapseNext();
				if (!hasCollapsedACell) {
					handleSolvingClick()
					alert('There are no more cells left to collapse')
				}
			}, 1000);
			setIntervalId(id);
		} else {
			clearInterval(intervalId);
			setIntervalId(undefined);
		}

		return () => clearInterval(intervalId);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isSolving]);



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
					onClick={handleSolvingClick}
					sx={{ marginLeft: "10px" }}
					endIcon={isSolving ? <StopIcon /> : <SendIcon />}
					color={isSolving ? "error" : "primary"}
				>
					{isSolving ? 'Stop' : 'Start'} solving
				</Button>
			</div>
			<CollapseMenu />
		</section>
	);
};

export default Board;
