import React from "react";
import Square from "../Square";
import Styles from "./SquaresArea.module.scss";
import { xOptions } from "../../types/xOptions";
import { yOptions } from "../../types/yOptions";
import { cell } from "../../types/cell";

type colorOptions = "color-1" | "color-2";
interface props {
	x: xOptions;
	y: yOptions;
	children: cell[][];
}

const SquaresArea = ({ x, y, children: areaValues }: props) => {
	const areaId = y[0] + x[0];
	const color = getBackgroundColor(areaId);

	return (
		<div className={Styles[color]}>
			{areaValues.map((line, lineIndex) => {
				const yOption = ["top", "center", "bottom"][lineIndex] as yOptions;
				const rowId = areaId + `[${yOption[0]}]`;

				return (
					<React.Fragment key={rowId}>
						<br />
						<div className={Styles.line}>
							<div className={Styles["between-rows"]}></div>
							{line.map((item, columnIndex) => {
								const xOption = ["left", "middle", "right"][columnIndex] as xOptions;
								const cellId = areaId + `[${yOption[0] + xOption[0]}]`;

								return (
									<React.Fragment key={cellId}>
										<Square x={xOption} y={yOption}>
											{item}
										</Square>
										<div className={Styles["between-rows"]}></div>
									</React.Fragment>
								);
							})}
						</div>
					</React.Fragment>
				);
			})}
			<br />
		</div>
	);

	function getBackgroundColor(areaId: string): colorOptions {
		if (["tm", "cr", "cl", "bm"].includes(areaId)) {
			return "color-1";
		}

		return "color-2";
	}
};

export default SquaresArea;
