import { useCollapseMenu } from "../../hooks/useCollapseMenu";
import { cell } from "../../types/cell";
import { xOptions } from "../../types/xOptions";
import { yOptions } from "../../types/yOptions";

interface props {
	x: xOptions;
	y: yOptions;
	children: cell;
}

const Square = ({ x, y, children: cell }: props) => {
	const { open } = useCollapseMenu();

	const firstValueFromCell = cell.possibleStates.values().next().value;

	return (
		<div onClick={() => open(cell)}>
			{cell.hasCollapsed ? firstValueFromCell : "?"}
		</div>
	);
};

export default Square;
