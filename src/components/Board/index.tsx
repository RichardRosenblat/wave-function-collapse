import { xOptions } from "../../types/xOptions";
import { yOptions } from "../../types/yOptions";
import SquaresArea from "../SquaresArea";
import Styles from "./Board.module.scss";
import CollapseMenu from "../CollapseMenu";
import { useBoard } from "../../hooks/useBoard";
import { Button } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import SendIcon from "@mui/icons-material/Send";

const Board = () => {
	const { board, restoreAll, collapseAll } = useBoard();

	const handleSolvingClick = () => {
		collapseAll()
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
					onClick={handleSolvingClick}
					sx={{ marginLeft: "10px" }}
					endIcon={<SendIcon />}
					color={"primary"}
				>
					Solve All Cells
				</Button>
			</div>
			<CollapseMenu />
		</section>
	);
};

export default Board;
