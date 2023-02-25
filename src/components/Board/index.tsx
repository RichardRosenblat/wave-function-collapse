import { cell } from "../../types/cell";
import { xOptions } from "../../types/xOptions";
import { yOptions } from "../../types/yOptions";
import { boardify } from "../../util/boardify";
import SquaresArea from "../SquaresArea";
import Styles from "./Board.module.scss";

const values1D: cell[] = [];

for (let i = 0; i < 81; i++) {
	values1D[i] = {
		hasCollapsed: false,
		possibleStates: new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
	};
}

const boardValues: cell[][][][] = boardify(values1D);

const Board = () => {
	return (
		<section className={Styles.container}>
			{boardValues.map((rowOfAreas, rowOfAreasIndex) => {
				const yOption = ["top", "center", "bottom"][rowOfAreasIndex] as yOptions;
				const rowOfAreasId = yOption[0];

				return (
					<div className={Styles.area_group} key={rowOfAreasId}>
						{rowOfAreas.map((area, areaIndex) => {
							const xOption = ["left", "middle", "right"][areaIndex] as xOptions;
							const areaId = rowOfAreasId + xOption[0];
							return (
								<SquaresArea y={yOption} x={xOption} key={areaId}>
									{area}
								</SquaresArea>
							);
						})}
					</div>
				);
			})}
		</section>
	);
};

export default Board;
