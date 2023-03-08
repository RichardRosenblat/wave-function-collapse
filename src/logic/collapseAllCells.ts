import { cell } from "../types/cell";
import { getCellCoordinatesFromId } from "../util/getCellCoordinatesFromId";
import { randomFrom } from "../util/randomFrom";
import { collapseCell } from "./collapseCell";

let generator: Generator<number[], number[] | undefined, unknown>;
let cellsWithLessEntropy: cell[];

export function collapseAllCells(board: cell[][][][]) {
	cellsWithLessEntropy = findCellsWithLessEntropy(board);

	if (!generator) {
		generator = collapseNext();
	}

	return generator.next().value || [];

	function* collapseNext() {
		if (cellsWithLessEntropy.length === 0) {
			return [] as number[];
		}
		const randomCell = randomFrom(cellsWithLessEntropy);
		const [Y, X, y, x] = getCellCoordinatesFromId(randomCell.id);
		const randomState = randomFrom(randomCell.possibleStates);

		collapseCell([Y, X, y, x], randomState, board);

		yield [Y, X, y, x];
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
}
