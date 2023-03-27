import Square from "../Square";
import Styles from "./SquaresArea.module.scss";
import { xOptions } from "../../types/xOptions";
import { yOptions } from "../../types/yOptions";
import { cell } from "../../types/cell";

interface props {
	x: xOptions;
	y: yOptions;
	children: readonly (readonly cell[])[];
}

const SquaresArea = ({ x, y, children: areaValues }: props) => {
	const areaId = y[0] + x[0];

	return (
		<div className={Styles.grid}>
			{areaValues.map((line, lineIndex) => {
				const yOption = ["top", "center", "bottom"][lineIndex] as yOptions;

				return (
					line.map((item, columnIndex) => {
						const xOption = ["left", "middle", "right"][columnIndex] as xOptions;
						const cellKey = areaId + `[${yOption[0] + xOption[0]}]`;

						return (
							<Square key={cellKey}>
								{item}
							</Square>
						);
					})
				);
			})}
		</div>
	);


};

export default SquaresArea;
