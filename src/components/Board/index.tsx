import { cell } from "../../types/cell";
import { xOptions } from "../../types/xOptions";
import { yOptions } from "../../types/yOptions";
import { boardify } from "../../util/boardify";
import { idGenerator } from "../../util/cellIdGenerator";
import SquaresArea from "../SquaresArea";
import Styles from "./Board.module.scss";
import CollapseMenu from "../CollapseMenu";

const values1D: cell[] = [];

for (let i = 0; i < 81; i++) {
	values1D[i] = {
		id: idGenerator.next().value,
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
				const rowOfAreasKey = yOption[0];

				return (
					<>
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
						<CollapseMenu />
					</>
				);
			})}
		</section>
	);
};

export default Board;
