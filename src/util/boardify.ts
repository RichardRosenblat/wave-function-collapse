import { cell } from "../types/cell";

export function boardify(array: cell[]) {
	if (array.length !== 81) {
		throw new Error("An array cannot be boardified if its lenght is other than 81");
	}

	const board: cell[][][][] = [];
	let areasRowInBoard: cell[][][] = [];
	let areasInAreaRow: cell[][] = [];
	let rowInArea: cell[] = [];

	for (let i = 0; i < array.length; i++) {
		rowInArea.push(array[i]);

		if (rowInArea.length === 3) {
			areasInAreaRow.push(rowInArea);
			rowInArea = [];
		}
		if (areasInAreaRow.length === 3) {
			areasRowInBoard.push(areasInAreaRow);
			areasInAreaRow = [];
		}
		if (areasRowInBoard.length === 3) {
			board.push(areasRowInBoard);
			areasRowInBoard = [];
		}
	}

	return board;
}