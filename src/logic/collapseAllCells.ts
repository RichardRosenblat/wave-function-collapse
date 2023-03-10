import { cell } from "../types/cell";
import { getCellCoordinatesFromId } from "../util/getCellCoordinatesFromId";
import { randomFrom } from "../util/randomFrom";
import { collapseCell } from "./collapseCell";

export function collapseNextCell(board: cell[][][][]) {
	const cellsWithLessEntropy = findCellsWithLessEntropy(board);

	if (cellsWithLessEntropy.length === 0) {
		return false;
	}

	const randomCell = randomFrom(cellsWithLessEntropy);
	const [Y, X, y, x] = getCellCoordinatesFromId(randomCell.id);
	const randomState = randomFrom(randomCell.possibleStates);

	collapseCell([Y, X, y, x], randomState, board);
	
	return true;
}

function findCellsWithLessEntropy(board: cell[][][][]) {
	return board.flat(3).reduce((cells: cell[], cell: cell) => {
		if (cell.hasCollapsed) {
			return cells;
		}

		const comparisonCell = cells[0];
		if (!comparisonCell) {
			return [cell];
		}

		if (cell.possibleStates.size > comparisonCell.possibleStates.size) {
			return cells;
		}

		if (cell.possibleStates.size === comparisonCell.possibleStates.size) {
			cells.push(cell);
			return cells;
		}

		return [cell];
	}, []);
}
