import { useCollapseMenu } from "../../hooks/useCollapseMenu";
import { cell } from "../../types/cell";
import { xOptions } from "../../types/xOptions";
import { yOptions } from "../../types/yOptions";
import Styles from './Square.module.scss'

interface props {
	x: xOptions;
	y: yOptions;
	children: cell;
}

const Square = ({ x, y, children: cell }: props) => {
	const { open } = useCollapseMenu();

	const firstValueFromCell = cell.possibleStates.values().next().value;

	return (
		<div onClick={() => open(cell)} className={Styles.color4}>
			{cell.hasCollapsed ? firstValueFromCell : "?"}
		</div>
	);
	// return <div>{y[0]+x[0]}</div>
};

export default Square;
