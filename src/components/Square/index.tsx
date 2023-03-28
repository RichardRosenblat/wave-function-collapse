import classNames from "classnames";
import { useCollapseMenu } from "../../hooks/useCollapseMenu";
import { cell } from "../../types/cell";
import Styles from './Square.module.scss'

interface props {
	children: cell;
}

const Square = ({ children: cell }: props) => {
	const { open, selectedCell } = useCollapseMenu();

	const firstValueFromCell = cell.possibleStates.values().next().value;

	const handleCellClick = () => { open(cell) };

	return (
		<div
			onClick={handleCellClick}
			className={
				classNames({
					[Styles.cell]: true,
					[Styles['cell--solved']]: cell.hasCollapsed,
					[Styles['cell--selected']]: selectedCell?.id === cell.id && !cell.hasCollapsed,
				})
			}
		>
			{cell.hasCollapsed ? firstValueFromCell : "?"}
		</div>
	);
};

export default Square;
