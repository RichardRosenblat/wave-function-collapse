import { cell } from "../types/cell";
import { differenceOf } from "../util/differenceOf";
import { unionOf } from "../util/unionOf";

export function calculateCellStates(collapsedCoords: number[], revertedCellState: number, board: cell[][][][]) {

	const defaultStates = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	const alreadyExistingStates = getSurroundingCellsStates(collapsedCoords, revertedCellState, board);

	return differenceOf(defaultStates, alreadyExistingStates);
}

function getSurroundingCellsStates(collapsedCoords: number[], revertedCellState: number, board: cell[][][][]) {
	const [Y, X, y, x] = collapsedCoords;

	const areaRestrinctingStates = checkAreaStates();
	
	const horizontalRestrinctingStates = checkLineStates("horizontal");

	const verticalRestrictingStates = checkLineStates("vertical");

	return unionOf(areaRestrinctingStates, horizontalRestrinctingStates, verticalRestrictingStates);

	function checkAreaStates() {
		const cellArea = board[Y][X];
		const areaStates = new Set<number>();

		cellArea.forEach((row, cellY) => {
			row.forEach((currentCell, cellX) => {
				if (currentCell.id === board[Y][X][y][x].id) {
					return;
				}
				const cellState = addOrGetState([Y, X, cellY, cellX]);
				if (cellState instanceof Set) {
					return;
				}
				areaStates.add(cellState);
			});
		});
		return areaStates;
	}
	function checkLineStates(direction: "vertical" | "horizontal") {
		const collapsedCellRef = direction === "vertical" ? Y : X;

		const lineStates = new Set<number>();

		for (let areaCursor = 0; areaCursor < 3; areaCursor++) {
			if (areaCursor === collapsedCellRef) {
				continue;
			}

			for (let cellCursor = 0; cellCursor < 3; cellCursor++) {
				let cellState: number | Set<number>;

				if (direction === "vertical") {
					cellState = addOrGetState([areaCursor, X, cellCursor, x]);
				} else {
					cellState = addOrGetState([Y, areaCursor, y, cellCursor]);
				}

				if (cellState instanceof Set) {
					continue;
				}

				lineStates.add(cellState);
			}
		}

		return lineStates;
	}
	function addOrGetState(coordsToCheck: number[]) {
		const [Y, X, y, x] = coordsToCheck;
		const currentCell = board[Y][X][y][x];

		if (currentCell.hasCollapsed) {
			const currentCellState = Array.from(currentCell.possibleStates.values())[0];
			return currentCellState;
		}

		currentCell.possibleStates.add(revertedCellState);
		return currentCell.possibleStates;
	}
}
