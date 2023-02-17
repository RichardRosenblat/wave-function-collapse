export function boardify(array: number[]) {
	if (array.length !== 81) {
		throw new Error("An array cannot be boardified if its lenght is other than 81");
	}

	const board: number[][][][] = [];
	let areasRowInBoard: number[][][] = [];
	let areasInAreaRow: number[][] = [];
	let rowInArea: number[] = [];

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