import { cell } from "../types/cell";
import { boardify } from "./boardify";
import { idGenerator } from "./cellIdGenerator";

function getDefaultBoard() {
	const values1D: cell[] = [];

	for (let i = 0; i < 81; i++) {
		values1D[i] = {
			id: idGenerator.next().value,
			hasCollapsed: false,
			possibleStates: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]),
		};
	}

	return boardify(values1D);
}
export const defaultBoard = getDefaultBoard();
