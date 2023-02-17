import { xOptions } from "../../types/xOptions";
import { yOptions } from "../../types/yOptions";
import { boardify } from "../../util/boardify";
import SquaresArea from "../SquaresArea";
import Styles from "./Board.module.scss";

const values1D: number[] = [];

for (let i = 0; i < 81; i++) {
	values1D[i] = i;
}

const boardValues: number[][][][] = boardify(values1D);

const Board = () => {
	return (
		<section className={Styles.container}>
			{boardValues.map((rowOfAreas, rowOfAreasIndex) => {
				const yOption = ["top", "center", "bottom"][rowOfAreasIndex] as yOptions;
				const rowOfAreasId = yOption[0];

				return (
					<div className={Styles.area_group} key={rowOfAreasId}>
						{rowOfAreas.map((area, areaIndex) => {
							const xOption = ["right", "middle", "left"][areaIndex] as xOptions;

							return (
								<SquaresArea y={yOption} x={xOption}>
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
