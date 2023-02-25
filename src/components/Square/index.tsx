import { cell } from "../../types/cell";
import { cellId } from "../../types/cellId";
import { xOptions } from "../../types/xOptions";
import { yOptions } from "../../types/yOptions";
import Styles from "./Square.module.scss";

interface props {
	x: xOptions;
	y: yOptions;
	id: cellId;
	children: cell;
}

const Square = ({ x, y, children: cell }: props) => {
	const firstValueFromCell = cell.possibleStates.values().next().value;
	return (
		<div className={Styles[x] + " " + Styles[y]}>
			{cell.hasCollapsed ? firstValueFromCell : "?"}
		</div>
	);
};

export default Square;
