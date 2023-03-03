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
	const [Y, X, y, x] = collapsedCoords;

	updateAreaStates();
	updateLineStates("horizontal");
	updateLineStates("vertical");

	function updateAreaStates() {
		const cellArea = board[Y][X];

		cellArea.forEach((row, cellY) => {
			row.forEach((_, cellX) => {
				removeStateOrCollapse([Y, X, cellY, cellX]);
			});
		});
	}
	function updateLineStates(direction: "vertical" | "horizontal") {
		const collapsedCellRef = direction === "vertical" ? Y : X;

		for (let areaCursor = 0; areaCursor < 3; areaCursor++) {
			if (areaCursor === collapsedCellRef) {
				continue;
			}

			for (let cellCursor = 0; cellCursor < 3; cellCursor++) {
				if (direction === "vertical") {
					removeStateOrCollapse([areaCursor, X, cellCursor, x]);
				} else {
					removeStateOrCollapse([Y, areaCursor, y, cellCursor]);
				}
			}
		}
	}

	function removeStateOrCollapse(coordsToCheck: number[]) {
		const [Y, X, y, x] = coordsToCheck;
		const currentCell = board[Y][X][y][x];

		if (!currentCell.hasCollapsed) {
			currentCell.possibleStates.delete(valueCollapsedInto);

			if (currentCell.possibleStates.size === 1) {
				const remainingState = Array.from(currentCell.possibleStates.values())[0];
				collapseCell([Y, X, y, x], remainingState, board);
			}
		}
	}
}
