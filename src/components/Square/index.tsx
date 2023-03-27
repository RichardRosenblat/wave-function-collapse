import { useState } from "react";
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
	const { open, selectedCell } = useCollapseMenu();

	const firstValueFromCell = cell.possibleStates.values().next().value;

	const handleCellClick = () => { open(cell) };
	;
	return (
		<div 
			onClick={handleCellClick} 
			className={Styles[
				'cell' + (cell.hasCollapsed ? '_solved' : '') + 
				(selectedCell?.id === cell.id && !cell.hasCollapsed ? '_selected' : '')
				]
			}
			>
			{cell.hasCollapsed ? firstValueFromCell : "?"}
		</div>
	);
};

export default Square;
