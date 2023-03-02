import { cell } from "../types/cell";

export function collapseCell(collapsedCoords: number[], colapsedInto: number, board: cell[][][][]) {
	const [Y, X, y, x] = collapsedCoords;

	board[Y][X][y][x] = {
		...board[Y][X][y][x],
		hasCollapsed: true,
		possibleStates: new Set([colapsedInto]),
	};

	updateBoardPossibleStates(collapsedCoords, colapsedInto, board);
}

function updateBoardPossibleStates(collapsedCoords: number[], valueCollapsedInto: number, board: cell[][][][]) {
	const [Y, X] = collapsedCoords;
	const cellArea = board[Y][X];

	updateAreaStates();

	function updateAreaStates() {
		cellArea.forEach((row, cellY) => {
			row.forEach((currentCell, cellX) => {
				if (!currentCell.hasCollapsed) {
					currentCell.possibleStates.delete(valueCollapsedInto);

					if (currentCell.possibleStates.size === 1) {
						const remainingState = Array.from(currentCell.possibleStates.values())[0];
						collapseCell([Y, X, cellY, cellX], remainingState, board);
					}
				}
			});
		});
	}
}
