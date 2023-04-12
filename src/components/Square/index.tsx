import classNames from "classnames";
import { useCollapseMenu } from "../../hooks/useCollapseMenu";
import { cell } from "../../types/cell";
import Styles from './Square.module.scss'
import { getCellCoordinatesFromId } from "../../util/getCellCoordinatesFromId";

interface props {
	children: cell;
}

const Square = ({ children: cell }: props) => {
	const { open, selectedCell } = useCollapseMenu();

	const firstValueFromCell = cell.possibleStates.values().next().value;
	const [, , y, x] = getCellCoordinatesFromId(cell.id)
	const handleCellClick = () => { open(cell) };



	return (
		<div
			onClick={handleCellClick}
			className={
				classNames({
					[Styles.cell]: true,
					[Styles['cell--solved']]: cell.hasCollapsed,
					[Styles['cell--selected']]: selectedCell?.id === cell.id && !cell.hasCollapsed,
					[Styles['cell__thick-border-right']]: x === 2,
					[Styles['cell__thick-border-bottom']]: y === 2,
					[Styles['cell__thick-border-left']]: x === 0,
					[Styles['cell__thick-border-top']]: y === 0,
				})
			}
		>
			{cell.hasCollapsed ? firstValueFromCell : "?"}
		</div>
	);
};

export default Square;
